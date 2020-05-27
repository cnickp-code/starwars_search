import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from '../ResultsList/ResultsList';

class SearchPage extends React.Component {
    render() {
        return (
            <>
                <SearchForm {...this.props} />
                <ResultsList />
            </>
        )

    }
}

export default SearchPage;