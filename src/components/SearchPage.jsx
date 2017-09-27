import React from 'react';
import data from './../data.json';
import SearchHeader from './SearchHeader.jsx';
import { SearchResults } from './SearchResults.jsx';
import { Footer } from './Footer.jsx';
import { NotFound } from './NotFound.jsx';

export class SearchPage extends React.Component {
    constructor(props) {
        super(props);
    }
    searchByParameter(params, data) {
        if (params.get('parameter') !== null && params.get('value') !== null) {
            return data.filter( (a) => a[params.get('parameter')].toLowerCase().indexOf(params.get('value').toLowerCase()) !== -1 )
        }
    }
    render() {
        let searchResults;
        let parameter;
        let value;

        if (this.props.location.search !== '') {
            let params = new URLSearchParams(this.props.location.search);
            searchResults = this.searchByParameter(params, data);
            parameter = params.get('parameter');
            value = params.get('value');
        }
        else {
            searchResults = [];
        }

        if (searchResults !== undefined) {
            return (
                <div className="page_container">
                    <SearchHeader
                        parameter={parameter || "show_title"}
                        value={value || ''}
                    />
                    <SearchResults
                        data={searchResults}
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