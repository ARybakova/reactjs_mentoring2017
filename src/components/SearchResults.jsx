import React from 'react';
import { Movie } from './Movie.jsx';

export class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortMethod: "sortByRelease"
        }
    }
    setSortMethod(method) {
        this.setState({
            sortMethod: method
        });
    }
    sortByMethod(arr) {
        if (this.state.sortMethod === "sortByRelease") {
            return arr.slice().sort((a,b) => b.release_year - a.release_year)
        } else if (this.state.sortMethod === "sortByRating") {
            return arr.slice().sort((a,b) => b.rating - a.rating)
        }
    }
    render() {

        let sortedItems = this.sortByMethod(this.props.data);

        return (
            <section className="results">

                { sortedItems.length > 0 ? (

                    <div>
                        <div className="results_panel">
                            <span className="results_title">{sortedItems.length} movies found</span>
                            <div className="results_filter">
                                <span className="results_filter_title">Sort by</span>
                                <button className={'results_filter_btn' + (this.state.sortMethod === "sortByRelease" ? ' active' : '')}
                                        onClick={() => this.setSortMethod("sortByRelease") }>release date</button>
                                <button className={'results_filter_btn' + (this.state.sortMethod === "sortByRating" ? ' active' : '')}
                                        onClick={() => this.setSortMethod("sortByRating")}>rating</button>
                            </div>
                        </div>
                        <div className="results_items">
                            {sortedItems.map((movie) => <Movie key={movie.show_id} movie={movie} />)}
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