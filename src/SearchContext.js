import React from 'react';

const SearchContext = React.createContext({
    result: [],
    loading: false,
    searchTerm: '',
    searchTouched: false,
    categoryTerm: '',
    updateResults: () => {},
    toggleLoading: () => {},
    updateSearchTerm: () => {},
    updateCategoryTerm: () => {}
})

export default SearchContext;