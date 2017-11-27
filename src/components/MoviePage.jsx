import React from 'react';
import { MovieHeader } from './MovieHeader';
import { MovieResults } from './MovieResults';
import { Footer } from './Footer';
import { NotFound } from './NotFound';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from '../actions/actions';

class MoviePage extends React.Component {

    componentDidMount() {
      this.props.pageActions.getMovie(this.props.match.params.name);
    }

    render() {
        const { movie, results } = this.props;

        if (Object.keys(movie).length !== 0) {
            return (
                <div className="page_container">
                    <MovieHeader
                        movie={movie}
                    />
                    <MovieResults
                        movie={movie}
                        results={results}
                    />
                    <Footer/>
                </div>
            );
        }
        else {
            return <NotFound/>
        }
    }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    results: state.movie.results,
    movie:  state.movie.movie
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export const MoviePageConnected = connect(mapStateToProps, mapDispatchToProps)(MoviePage);