import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchContext from '../../SearchContext';
import PersonInfo from '../PersonInfo/PersonInfo';
import PlanetInfo from '../PlanetInfo/PlanetInfo';
import SpeciesInfo from '../SpeciesInfo/SpeciesInfo';
import FilmInfo from '../FilmInfo/FilmInfo';
import StarshipInfo from '../StarshipInfo/StarshipInfo';
import VehicleInfo from '../VehicleInfo/VehicleInfo';


class ResultInfo extends React.Component {
    static contextType = SearchContext;

    render () {
        const info = this.context.results.find(result => result.id === this.props.infoId);

        const category = this.context.categoryTerm;
        let content = '';

        console.log(info);
        console.log(category);

        if(category === 'people') {
            content = <PersonInfo info={info} />;
        } else if(category === 'films') {
            content = <FilmInfo info={info} />;
        } else if(category === 'planets') {
            content = <PlanetInfo info={info} />;
        } else if(category === 'species') {
            content = <SpeciesInfo info={info} />;
        } else if(category === 'starships') {
            content = <StarshipInfo info={info} />;
        } else if(category === 'vehicles') {
            content = <VehicleInfo info={info} />;
        }
        

        return (
            <>
                <h2 className='info-name'>{info.name}</h2>
                <div className="info-container">
                    {content}
                </div>

                <div className="button-container">
                    <NavLink to='/search' className="back-button">Go Back</NavLink>
                    {/* <button className="back-button" onClick={this.props.history.goBack}>Go Back</button> */}
                </div>
            </>
        )
    }
}

export default ResultInfo;