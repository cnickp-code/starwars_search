import React from 'react';

const SearchContext = React.createContext({
    result: [],
    loading: false,
    searchTerm: '',
    updateResults: () => {},
    toggleLoading: () => {},
    updateSearchTerm: () => {}
})

export default SearchContext;