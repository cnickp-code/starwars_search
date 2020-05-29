import React from 'react';
import SearchContext from '../../SearchContext';
import leftLogo from '../../images/dark_side.png';
import rightLogo from '../../images/jedi.jpg';
import ValidationError from '../ValidationError/ValidationError';

function handlePagination(url, options, results, resolve, reject) {
    fetch(url, options)
    .then(res => {
        if(!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    })
    .then(data => {

        data.results.forEach(result => {
            results.push(result);
        })

        const finalResults = results;
        if(data.next !== null) {
            handlePagination(data.next, options, finalResults, resolve, reject)
        } else {
            resolve(finalResults)
        }
    }).catch(err => console.log(err));
}

class SearchForm extends React.Component {
    static contextType = SearchContext;

    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
    }

    handleCategoryChange(category) {
        console.log(`handleCategoryChange ran`);
        console.log(category);
        this.context.updateCategoryTerm(category);
    }

    validateSearch() {
        const searchTerm = this.context.searchTerm;

        if(searchTerm.length < 3) {
            return "Search must be at least 3 characters long"
        }
    }

    updateSearch(search) {
        this.context.updateSearchTerm(search, true);
    }


    handleSearchSubmit(event, callback) {
        event.preventDefault();

        const categoryTerm = this.context.categoryTerm;
        const searchTerm = this.context.searchTerm;

        this.props.history.push(`/${categoryTerm}`);
        this.context.toggleLoading(true);
        this.context.updateSearchTerm(searchTerm, false);
        
        const baseUrl = `https://swapi-thinkful.herokuapp.com/api/${categoryTerm}/?search=${searchTerm}`;
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
        console.log(baseUrl);

        new Promise((resolve, reject) => {
            handlePagination(baseUrl, options, [], resolve, reject);
        }).then(res => {
            this.context.toggleLoading(false);
            callback(res);
        })
    }

    render() {
        const searchError = this.validateSearch();

        return (
            <SearchContext.Consumer>
                {(context) => (
                    <section className="search-container"> 
                        <div className="banner-left">
                            {/* <img src={leftLogo} alt="left logo" className="logo" /> */}
                        </div>
                        <div className="middle-wrapper">
                            <form id="search-form" onSubmit={e => this.handleSearchSubmit(e, context.updateResults)}>
                                <div className="search-text">MTFBWU!</div>
                                <div className="search-container">
                                    <input type="text" className="search-input" placeholder="E.g. Skywalker" ref={this.searchInput} onChange={e => this.updateSearch(e.target.value)}/>
                                    <button type="submit" className="search-submit-button">Search</button>
                                    
                                </div>
                                {this.context.searchTouched && <ValidationError message={searchError} />}
                            </form>
                            <select name="search-type" defaultValue='people' id="search-type" onChange={e => this.handleCategoryChange(e.target.value)}>
                                <option value="people">People</option>
                                <option value="planets">Planets</option>
                                <option value="starships">Starships</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="films">Films</option>
                                <option value="species">Species</option>
                            </select>
                        </div>
                        <div className="banner-right">
                            {/* <img src={rightLogo} alt="left logo" className="logo" /> */}
                        </div>
                    </section>
                )}
            </SearchContext.Consumer>
        )
    }

}

export default SearchForm;