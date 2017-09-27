import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { SearchPage } from './SearchPage.jsx';
import { MoviePage } from './MoviePage.jsx';
import { NotFound } from './NotFound.jsx';

class App extends React.Component {

    render() {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
}

export const init = function() {
    ReactDOM.render((
        <Router>
            <App>
                <Switch>
                    <Redirect exact from="/" to="/search"/>

                    <Route path="/search" component={SearchPage}>
                    </Route>

                    <Route path="/film/:name" component={MoviePage}/>

                    <Route path="*" component={NotFound} />
                </Switch>
            </App>
        </Router>
    ), document.getElementById('app'));
};