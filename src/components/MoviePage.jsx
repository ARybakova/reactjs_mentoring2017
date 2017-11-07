import React from 'react';
import { MovieHeader } from './MovieHeader';
import { MovieResults } from './MovieResults';
import { Footer } from './Footer';
import { NotFound } from './NotFound';

export class MoviePage extends React.Component {

    componentWillMount() {
      this.props.pageActions.getMovie(this.props.match.params.name);
    }

    render() {
        const { movie, results } = this.props.movie;

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