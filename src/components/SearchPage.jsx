import React from 'react';
import { SearchHeaderWithRouter as SearchHeader } from './SearchHeader';
import { SearchResults } from './SearchResults';
import { Footer } from './Footer';
import { NotFound } from './NotFound';

export class SearchPage extends React.Component {

    componentWillMount() {
      let searchParams = new URLSearchParams(this.props.location.search);
      let parameter = searchParams.get('parameter');
      let value = searchParams.get('value');
      this.props.pageActions.setParameter(parameter);
      this.props.pageActions.setValue(value);
      this.props.pageActions.doSearch(parameter, value);
    }

    render() {
        const { parameter, results, sortMethod, value } = this.props.search;
        const { doSearch, setParameter, setValue, setSortMethod, sortResults } = this.props.pageActions;

        if (this.props.search.results !== undefined) {
            return (
                <div className="page_container">
                    <SearchHeader
                        parameter={parameter}
                        value={value}
                        setParameter={setParameter}
                        setValue={setValue}
                        doSearch={doSearch}
                    />
                    <SearchResults
                        sortMethod={sortMethod}
                        results={results}
                        setSortMethod={setSortMethod}
                        sortResults={sortResults}
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