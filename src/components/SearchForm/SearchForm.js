import React from 'react';
import SearchContext from '../../SearchContext';

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

    handleSearchSubmit(event, callback) {
        event.preventDefault();

        this.props.history.push('/search');
        this.context.toggleLoading(true);
        this.context.updateSearchTerm(this.searchInput.current.value);
        
        const categoryTerm = this.context.categoryTerm;
        const searchTerm = this.searchInput.current.value;

        const baseUrl = `https://swapi-thinkful.herokuapp.com/api/${categoryTerm}/?search=${searchTerm}`;
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }

        new Promise((resolve, reject) => {
            handlePagination(baseUrl, options, [], resolve, reject);
        }).then(res => {
            this.context.toggleLoading(false);
            callback(res);
        })
    }

    render() {


        return (
            <SearchContext.Consumer>
                {(context) => (
                    <section className="search-container"> 
                        <div className="banner-left">logo 1</div>
                        <div className="middle-wrapper">
                            <form id="search-form" onSubmit={e => this.handleSearchSubmit(e, context.updateResults)}>
                                <div className="search-text">Enter Character Name</div>
                                <div className="search-container">
                                    <input type="text" className="search-input" placeholder="E.g. Skywalker" ref={this.searchInput}/>
                                    <button type="submit" className="search-submit-button">Search</button>

                                </div>
                            </form>
                            <select name="search-type" defaultValue='people' id="search-type" onChange={e => this.handleCategoryChange(e.target.value)}>
                                <option value="people">People</option>
                                <option value="planets">Planets</option>
                                <option value="starships">Spaceships</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="films">Films</option>
                                <option value="species">Species</option>
                            </select>
                        </div>
                        <div className="banner-right">logo 2</div>
                    </section>
                )}
            </SearchContext.Consumer>
        )
    }

}

export default SearchForm;