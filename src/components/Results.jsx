import React from 'react';
import { Movie } from './Movie.jsx';

export class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortMethod: "sortByRelease",
            data: this.props.data.sort((a,b) => b.release_year - a.release_year )
        }
    }
    sortByRelease() {
        this.setState({
            sortMethod: "sortByRelease",
            data: this.props.data.sort((a,b) => b.release_year - a.release_year)
        });
    }
    sortByRating() {
        this.setState({
            sortMethod: "sortByRating",
            data: this.props.data.sort((a,b) => b.rating - a.rating)
        });
    }
    render() {
        if (this.props.director) {
            return (
                <section className="results">
                    <div>
                        <div className="results_panel">
                            <span className="results_title">Films by {this.props.director}</span>
                        </div>
                        <div className="results_items">
                            {this.state.data.map((movie) => <Movie key={movie.show_id} movie={movie} />)}
                        </div>
                    </div>
                </section>
            )
        }
        return (
            <section className="results">

                { this.state.data.length > 0 ? (

                    <div>
                        <div className="results_panel">
                            <span className="results_title">{this.state.data.length} movies found</span>
                            <div className="results_filter">
                                <span className="results_filter_title">Sort by</span>
                                <button className={'results_filter_btn' + (this.state.sortMethod === "sortByRelease" ? ' active' : '')} onClick={this.sortByRelease.bind(this)}>release date</button>
                                <button className={'results_filter_btn' + (this.state.sortMethod === "sortByRating" ? ' active' : '')} onClick={this.sortByRating.bind(this)}>rating</button>
                            </div>
                        </div>
                        <div className="results_items">
                            {this.state.data.map((movie) => <Movie key={movie.show_id} movie={movie} />)}
                        </div>
                    </div>

                ) : (

                    <div>
                        <div className="results_panel"></div>
                        <div className="results_items">
                            <div className="results_empty">No films found</div>
                        </div>
                    </div>

                )}

            </section>
        )
    }
}