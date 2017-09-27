import React from 'react';
import { withRouter } from 'react-router';

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parameter: this.props.parameter,
            value: this.props.value
        }
    }
    handleInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    setSearchParameter(parameter) {
        this.setState({
            parameter: parameter
        });
    }
    goToSearch(event, value, parameter) {
        event.preventDefault();
        if (value !== '') {
            this.props.history.push('/search?parameter=' + parameter + '&value=' + value);
        }
        else this.props.history.replace('/search');
    }
    render() {
        return (
            <header className="header search_header">
                <div className="header_top_bar">
                    <span className="netflix_label">netflixroulette</span>
                </div>
                <h1 className="search_title">find your movie</h1>
                <form className="search_form" onSubmit={(event) => this.goToSearch(event, this.state.value, this.state.parameter)}>
                    <input className="search_field" placeholder="Your query" value={this.state.value} onChange={this.handleInputChange.bind(this)}/>
                    <div className="search_buttonpanel">
                        <div className="search_filter">
                            <span className="search_filter_title">search by</span>
                            <button type="button" className={'search_filter_btn' + (this.state.parameter === "show_title" ? ' active' : '')}
                                    onClick={() => this.setSearchParameter("show_title")}>title</button>
                            <button type="button" className={'search_filter_btn' + (this.state.parameter === "director" ? ' active' : '')}
                                    onClick={() => this.setSearchParameter("director")}>director</button>
                        </div>
                        <button type="submit" className="search_btn">search</button>
                    </div>
                </form>
            </header>
        );
    }
}
export default withRouter(SearchHeader)