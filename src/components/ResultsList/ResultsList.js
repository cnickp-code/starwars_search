import React from 'react';
import Result from '../Result/Result';
import ResultInfo from '../ResultInfo/ResultInfo';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import SearchContext from '../../SearchContext';

class ResultsList extends React.Component {
    static contextType = SearchContext;

    render() {
        console.log(`render ResultsList`);

        const results = this.context.results.map(result => {
            return <Result key={result.id} id={result.id} 
                    name={result.name} mass={result.mass} 
                    height={result.height} birthYear={result.birth_year}
                    skinColor={result.skin_color} hairColor={result.hair_color} 
                    eyeColor={result.eye_color} />


        })

        const loading = <LoadingScreen />

        let pageContent = '';

        if(this.context.loading) {
            pageContent = loading;
        } else {
            pageContent = results;
        }

        return (
            <section className="content-container">
                <div className="results-container">
                    {pageContent}   
                    {/* <ResultInfo /> */}
                </div>
            </section>
        )
    }

}

export default ResultsList;