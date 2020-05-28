import React from 'react';

const SearchContext = React.createContext({
    result: [],
    loading: false,
    searchTerm: '',
    categoryTerm: '',
    updateResults: () => {},
    toggleLoading: () => {},
    updateSearchTerm: () => {},
    updateCategoryTerm: () => {}
})

export default SearchContext;