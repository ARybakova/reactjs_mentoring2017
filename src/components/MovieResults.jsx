import React from 'react';
import { Movie } from './Movie.jsx';

export class MovieResults extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="results">
                <div>
                    <div className="results_panel">
                        <span className="results_title">Films by {this.props.movie.production_companies[0].name}</span>
                    </div>
                    <div className="results_items">
                        {this.props.results.map((movie) => <Movie key={movie.id} movie={movie} />)}
                    </div>
                </div>
            </section>
        )
    }
}