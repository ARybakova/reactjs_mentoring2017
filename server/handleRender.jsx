import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'url-search-params-polyfill';

import { configureStore } from "../src/configureStore";
import { AppWithRouter as App } from '../src/components/App';

function renderFullPage(res, html, preloadedState) {

  const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
  const publicPath = res.locals.webpackStats.toJson().publicPath;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React app</title>
        ${
        assetsByChunkName.styles
          .filter(path => path.endsWith('.css'))
          .map(path => `<link rel="stylesheet" href="${publicPath + path}" />`)
          .join('\n')
        }
      </head>
      <body>
        <div id="app">${html}</div>
         <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
         </script>
         <script src="${publicPath + assetsByChunkName.vendor}"></script>
         <script src="${publicPath + assetsByChunkName.app}"></script>
         ${
         assetsByChunkName.styles
           .filter(path => path.endsWith('.js'))
           .map(path => `<script src="${publicPath + path}"></script>`)
           .join('\n')
         }
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const store = configureStore();
  const context = {};
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context} >
        <App/>
      </StaticRouter>
    </Provider>
  );

  const html = renderToString(app);

  if (context.url) {
    return res.redirect(context.url);
  }

  const preloadedState = store.getState();

  return res.send(renderFullPage(res, html, preloadedState));
}

export default handleRender;