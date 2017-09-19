import React from 'react';
import data from './../data.json';
import { MovieHeader } from './MovieHeader.jsx';
import { Results } from './Results.jsx';
import { Footer } from './Footer.jsx';

export class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: data[0],
            data: data
        }
    }
    render() {
        return (
            <div className="main">
                <MovieHeader
                    movie={this.state.movie}
                />
                <Results
                    data={this.state.data.filter( (a) => a.director.toLowerCase() === this.state.movie.director.toLowerCase() )}
                    director={this.state.movie.director}
                />
                <Footer/>
            </div>
        );
    }
}