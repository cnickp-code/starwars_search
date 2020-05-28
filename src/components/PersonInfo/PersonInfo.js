import React from 'react';

class PersonInfo extends React.Component {

    render() {
        return (
            <>
                <div className="left-info-container">
                    <div className="info-text">Height: {this.props.info.height}cm </div>
                    <div className="info-text">Mass: {this.props.info.mass}kg</div>
                    <div className="info-text">Gender: {this.props.info.gender}</div>
                    <div className="info-text">Birth Year: {this.props.info.birth_year}</div>
                </div>

                <div className="right-info-container">
                    <div className="info-text">Skin Color: {this.props.info.skin_color}</div>
                    <div className="info-text">Eye Color: {this.props.info.eye_color}</div>
                    <div className="info-text">Hair Color: {this.props.info.hair_color}</div>
                </div>
            </>
        )
    }

}

export default PersonInfo;