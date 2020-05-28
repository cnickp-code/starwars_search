import React from 'react';

class PlanetInfo extends React.Component {

    render() {
        return (
            <>
                <div className="left-info-container">
                    <div className="info-text">Climate: {this.props.info.climate} </div>
                    <div className="info-text">Population: {this.props.info.population}</div>
                    <div className="info-text">Terrain: {this.props.info.terrain}</div>
                    <div className="info-text">Diameter: {this.props.info.diameter}</div>
                </div>

                <div className="right-info-container">
                    <div className="info-text">Rotation Period: {this.props.info.rotation_period}</div>
                    <div className="info-text">Gravity: {this.props.info.gravity}</div>
                    <div className="info-text">Orbital Period: {this.props.info.orbital_period}</div>
                </div>
            </>
        )
    }

}

export default PlanetInfo;