import React from 'react';
import Result from '../Result/Result';
import ResultInfo from '../ResultInfo/ResultInfo';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import SearchContext from '../../SearchContext';

class ResultsList extends React.Component {
    static contextType = SearchContext;

    render() {
        console.log(`render ResultsList`);
        let pageContent = '';

        if(this.context.results.length === 0) {

        }

        const results = this.context.results.map(result => {
            return <Result key={result.id} id={result.id} title={result.title}
                    name={result.name} />


        })

        const loading = <LoadingScreen />

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