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
      loading: false
    }
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
    console.log(this.state.results);
    console.log(this.state.loading);

    const contextValue = {
      results: this.state.results,
      loading: this.state.loading,
      updateResults: this.updateResults,
      toggleLoading: this.toggleLoading
    }

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
