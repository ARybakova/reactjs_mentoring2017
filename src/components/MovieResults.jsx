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
                        <span className="results_title">Films by {this.props.director}</span>
                    </div>
                    <div className="results_items">
                        {this.props.data.map((movie) => <Movie key={movie.show_id} movie={movie} />)}
                    </div>
                </div>
            </section>
        )
    }
}