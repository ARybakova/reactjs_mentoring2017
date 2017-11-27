import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { SearchPageConnected as SearchPage } from './SearchPage';
import { MoviePageConnected as MoviePage } from './MoviePage';
import { NotFound } from './NotFound';

class App extends React.Component {

    render() {

      return (
            <div className="main">
              <Switch>
                <Redirect exact from="/" to="/search"/>

                <Route path="/search" component={SearchPage}/>

                <Route path="/film/:name" component={MoviePage}/>

                <Route path="*" component={NotFound} />
              </Switch>
            </div>
        );
    }
}

export const AppWithRouter = withRouter(App); //because of https://github.com/ReactTraining/react-router/issues/4671