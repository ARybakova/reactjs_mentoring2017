import React from 'react';

export class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parameter: "show_title",
            value: ''
        }
    }
    handleInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    searchByTitle() {
        this.setState({
            parameter: "show_title"
        });
    }
    searchByDirector() {
        this.setState({
            parameter: "director"
        });
    }
    render() {
        return (
            <header className="header search_header">
                <div className="header_top_bar">
                    <span className="netflix_label">netflixroulette</span>
                </div>
                <h1 className="search_title">find your movie</h1>
                <form className="search_form" onSubmit={() => this.props.searchByParameter(this.state.value, this.state.parameter)}>
                    <input className="search_field" placeholder="Your query" value={this.state.value} onChange={this.handleInputChange.bind(this)}/>
                    <div className="search_buttonpanel">
                        <div className="search_filter">
                            <span className="search_filter_title">search by</span>
                            <button type="button" className={'search_filter_btn' + (this.state.parameter === "show_title" ? ' active' : '')} onClick={this.searchByTitle.bind(this)}>title</button>
                            <button type="button" className={'search_filter_btn' + (this.state.parameter === "director" ? ' active' : '')} onClick={this.searchByDirector.bind(this)}>director</button>
                        </div>
                        <button type="submit" className="search_btn">search</button>
                    </div>
                </form>
            </header>
        );
    }
}