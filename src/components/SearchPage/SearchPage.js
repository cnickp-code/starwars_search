import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from '../ResultsList/ResultsList';

class SearchPage extends React.Component {
    render() {
        console.log(this.props);

        return (
            <>
                <SearchForm {...this.props}  />
                <ResultsList {...this.props} />
            </>
        )

    }
}

export default SearchPage;