import React from 'react';
import data from './../data.json';
import { SearchHeader } from './SearchHeader.jsx';
import { Results } from './Results.jsx';
import { Footer } from './Footer.jsx';

export class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }
    searchByParameter(value, parameter) {
        this.setState({
            data: data.filter( (a) => a[parameter].toLowerCase().indexOf(value.toLowerCase()) !== -1 )
        });
    }
    render() {
        return (
            <div className="main">
                <SearchHeader
                    searchByParameter={this.searchByParameter.bind(this)}
                />
                <Results
                    data={this.state.data}
                />
                <Footer/>
            </div>
        );
    }
}