import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from '../ResultsList/ResultsList';
import ResultInfo from '../ResultInfo/ResultInfo';

class InfoPage extends React.Component {
    render() {
        return (
            <>
                <SearchForm />
                <ResultInfo infoId={this.props.infoId}/>
            </>
        )
    }
}

export default InfoPage;