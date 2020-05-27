import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from '../ResultsList/ResultsList';

class MainPage extends React.Component {
    render() {
        return (
            <>
                <SearchForm />
                {/* <ResultsList /> */}
            </>
        )
    }
}

export default MainPage;