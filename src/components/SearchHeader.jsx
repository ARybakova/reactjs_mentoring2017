import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    handleInputChange(event) {
      this.props.setValue(event.target.value);
    }
    setSearchParameter(parameter) {
        this.props.setParameter(parameter);
    }
    goToSearch(event, value, parameter) {
        event.preventDefault();
        if (value !== '') {
            this.props.history.push('/search?parameter=' + parameter + '&value=' + value);
            this.props.setParameter(parameter);
            this.props.setValue(value);
        }
        else this.props.history.replace('/search');
        this.props.doSearch(parameter, value);
    }
    render() {
        return (
            <header className="header search_header">
                <div className="header_top_bar">
                    <span className="netflix_label">netflixroulette</span>
                </div>
                <h1 className="search_title">find your movie</h1>
                <form className="search_form" onSubmit={(event) => this.goToSearch(event, this.props.value, this.props.parameter)}>
                    <input className="search_field" placeholder="Your query" value={this.props.value} onChange={this.handleInputChange.bind(this)}/>
                    <div className="search_buttonpanel">
                        <div className="search_filter">
                            <span className="search_filter_title">search by</span>
                            <button type="button" className={'search_filter_btn' + (this.props.parameter === "title" ? ' active' : '')}
                                    onClick={() => this.setSearchParameter("title")}>title</button>
                            <button type="button" className={'search_filter_btn' + (this.props.parameter === "director" ? ' active' : '')}
                                    onClick={() => this.setSearchParameter("director")}>director</button>
                        </div>
                        <button type="submit" className="search_btn">search</button>
                    </div>
                </form>
            </header>
        );
    }
}

export const SearchHeaderWithRouter = withRouter(SearchHeader);