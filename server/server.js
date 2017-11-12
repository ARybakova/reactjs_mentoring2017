import handleRender from './handleRender.jsx';

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./../webpack.config.js');
const app = express();
const compiler = webpack(config);

const PORT = 3000;

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  serverSideRender: true
}));

app.get('*', handleRender);

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!')
});