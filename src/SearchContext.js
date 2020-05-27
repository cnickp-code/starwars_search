import React from 'react';

const SearchContext = React.createContext({
    result: [],
    loading: false,
    updateResults: () => {},
    toggleLoading: () => {}
})

export default SearchContext;