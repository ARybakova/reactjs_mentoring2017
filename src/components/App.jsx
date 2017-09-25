import React from 'react';
import ReactDOM from 'react-dom';
import { SearchPage } from './SearchPage.jsx';
import { MoviePage } from './MoviePage.jsx';

const App = () => (
    <SearchPage/>
);

export const init = function() {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
};