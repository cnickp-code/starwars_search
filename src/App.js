import React from 'react';
import Routes from './Routes';
import SearchContext from './SearchContext';
import { NavLink } from 'react-router-dom';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      searchTerm: '',
      searchTouched: false,
      categoryTerm: 'people'
    }
  }


  updateSearchTerm = (search, touched) => {
    console.log(`updateSearchTerm ran`);

    this.setState({
      searchTerm: search,
      searchTouched: touched
    })
  }

  updateCategoryTerm = (search) => {
    console.log(`updateSearchTerm ran`);

    this.setState({
      categoryTerm: search
    })
  }

  updateResults = (results) => {
    console.log(`updateResults ran`);

    const newResults = results.map((res, i) => {
      const itemHash = 'SWResult-' + i;
      const id = {
        id: itemHash
      }

      return Object.assign(res, id);
    })


    console.log(newResults);
    this.setState({
      results: newResults
    })
  }


  toggleLoading = (loading) => {
    console.log(`toggleLoading ran`);

    const newLoading = loading;

    this.setState({
      loading: newLoading
    })

  }


  render() {

    const contextValue = {
      results: this.state.results,
      loading: this.state.loading,
      searchTerm: this.state.searchTerm,
      searchTouched: this.state.searchTouched,
      categoryTerm: this.state.categoryTerm,
      updateResults: this.updateResults,
      toggleLoading: this.toggleLoading,
      updateSearchTerm: this.updateSearchTerm,
      updateCategoryTerm: this.updateCategoryTerm
    }

    console.log(this.state.categoryTerm);

    return (
      <main className="App">

        <header>
            <NavLink to='/' className="header-link">Star Wars Search</NavLink>
        </header>
        <SearchContext.Provider value={contextValue}>
          <Routes />
        </SearchContext.Provider>
        

      </main>
    );
  }
}

export default App;
