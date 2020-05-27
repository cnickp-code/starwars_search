import React from 'react';
import SearchContext from '../../SearchContext';


class ResultInfo extends React.Component {
    static contextType = SearchContext;

    render () {
        const info = this.context.results.find(result => result.id === this.props.infoId);

        console.log(info);

        return (
            <>
                <div className="info-container">
                    <div className="left-info-container">
                        <div className="info-text">Height: </div>
                        <div className="info-text">Mass: </div>
                        <div className="info-text">Gender: </div>
                        <div className="info-text">Birth Year: </div>
                    </div>

                    <div className="right-info-container">
                        <div className="info-text">Skin Color: </div>
                        <div className="info-text">Eye Color: </div>
                        <div className="info-text">Hair Color: </div>
                    </div>
                </div>

                <div className="button-container">
                    <button className="back-button">Go Back</button>
                </div>
            </>
        )
    }
}

export default ResultInfo;