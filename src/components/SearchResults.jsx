import React from 'react';
import { Movie } from './Movie';

export class SearchResults extends React.Component {

    componentWillMount() {
      this.sortByMethod(this.props.results);
    }
    setSortMethod(method) {
        this.props.setSortMethod(method);
        this.sortByMethod(this.props.results);
    }
    sortByMethod(arr) {
        this.props.sortResults(arr);
    }

    render() {

        return (
            <section className="results">

                { this.props.results.length > 0 ? (

                    <div>
                        <div className="results_panel">
                            <span className="results_title">{this.props.results.length} movies found</span>
                            <div className="results_filter">
                                <span className="results_filter_title">Sort by</span>
                                <button className={'results_filter_btn' + (this.props.sortMethod === "sortByRelease" ? ' active' : '')}
                                        onClick={() => this.setSortMethod("sortByRelease") }>release date</button>
                                <button className={'results_filter_btn' + (this.props.sortMethod === "sortByRating" ? ' active' : '')}
                                        onClick={() => this.setSortMethod("sortByRating")}>rating</button>
                            </div>
                        </div>
                        <div className="results_items">
                            {this.props.results.map((movie) => <Movie key={movie.id} movie={movie} />)}
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