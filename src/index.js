import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppWithRouter as App } from './components/App';
import { configureStore } from "./configureStore";

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

const app = (
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));