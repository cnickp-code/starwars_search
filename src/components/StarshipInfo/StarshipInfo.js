import React from 'react';

class StarshipInfo extends React.Component {

    render() {
        return (
            <>
                <div className="left-info-container">
                    <div className="info-text">Cargo Capacity: {this.props.info.cargo_capacity} </div>
                    <div className="info-text">Crew: {this.props.info.crew}</div>
                    <div className="info-text">Length: {this.props.info.length}m</div>
                    <div className="info-text">Passengers: {this.props.info.passengers}</div>
                </div>

                <div className="right-info-container">
                    <div className="info-text">Manufacturer: {this.props.info.manufacturer}</div>
                    <div className="info-text">Model: {this.props.info.model}</div>
                    <div className="info-text">Starship Class: {this.props.info.starship_class}</div>
                </div>
            </>
        )
    }

}

export default StarshipInfo;