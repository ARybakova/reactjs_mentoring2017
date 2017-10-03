import React from 'react';
import data from './../data.json';
import { MovieHeader } from './MovieHeader.jsx';
import { MovieResults } from './MovieResults.jsx';
import { Footer } from './Footer.jsx';
import { NotFound } from './NotFound.jsx';

export class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }
    getMovieByName(name) {
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].show_title === name) {
                return this.state.data[i];
            }
        }
    }
    render() {
        let movie = this.getMovieByName(this.props.match.params.name);

        if (movie !== undefined) {
            return (
                <div className="page_container">
                    <MovieHeader
                        movie={movie}
                    />
                    <MovieResults
                        data={this.state.data.filter( (a) => a.director.toLowerCase() === movie.director.toLowerCase() )}
                        director={movie.director}
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