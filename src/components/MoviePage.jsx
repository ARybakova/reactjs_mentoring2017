import React from 'react';
import { MovieHeader } from './MovieHeader.jsx';
import { MovieResults } from './MovieResults.jsx';
import { Footer } from './Footer.jsx';
import { NotFound } from './NotFound.jsx';

export class MoviePage extends React.Component {
    constructor(props) {
        super(props);
    }
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