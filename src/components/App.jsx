import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { SearchPage } from './SearchPage.jsx';
import { MoviePage } from './MoviePage.jsx';
import { NotFound } from './NotFound.jsx';

import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import { reducer } from '../reducers/reducer.js';
import * as pageActions from '../actions/actions.js';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends React.Component {

    render() {

      const { search, movie, pageActions } = this.props;

      return (
            <div className="main">
              <Switch>
                <Redirect exact from="/" to="/search"/>

                <Route path="/search" render={(props) => <SearchPage {...props} search={search} pageActions={pageActions}/>}>
                </Route>

                <Route path="/film/:name" render={(props) => <MoviePage {...props} movie={movie} pageActions={pageActions}/>}/>

                <Route path="*" component={NotFound} />
              </Switch>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    movie: state.movie
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

const AppConnected = withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); //because of https://github.com/ReactTraining/react-router/issues/4671

export const init = function() {
    ReactDOM.render((
        <Provider store={store}>
            <Router>
                <AppConnected/>
            </Router>
        </Provider>
    ), document.getElementById('app'));
};