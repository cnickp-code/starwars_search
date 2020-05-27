import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchContext from '../../SearchContext';


class ResultInfo extends React.Component {
    static contextType = SearchContext;

    render () {
        const info = this.context.results.find(result => result.id === this.props.infoId);

        console.log(info);

        return (
            <>
                <h2 className='info-name'>{info.name}</h2>
                <div className="info-container">
                    
                    <div className="left-info-container">
                        <div className="info-text">Height: {info.height}cm </div>
                        <div className="info-text">Mass: {info.mass}kg</div>
                        <div className="info-text">Gender: {info.gender}</div>
                        <div className="info-text">Birth Year: {info.birth_year}</div>
                    </div>

                    <div className="right-info-container">
                        <div className="info-text">Skin Color: {info.skin_color}</div>
                        <div className="info-text">Eye Color: {info.eye_color}</div>
                        <div className="info-text">Hair Color: {info.hair_color}</div>
                    </div>
                </div>

                <div className="button-container">
                    <NavLink to='/search' className="back-button">Go Back</NavLink>
                </div>
            </>
        )
    }
}

export default ResultInfo;