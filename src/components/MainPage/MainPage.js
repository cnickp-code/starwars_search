import React from 'react';
import SearchForm from '../SearchForm/SearchForm';

class MainPage extends React.Component {
    render() {
        return (
            <>
                <SearchForm {...this.props}/>
            </>
        )
    }
}

export default MainPage;