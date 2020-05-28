import React from 'react';

class SpeciesInfo extends React.Component {

    render() {
        return (
            <>
                <div className="left-info-container">
                    <div className="info-text">Classification: {this.props.info.classification} </div>
                    <div className="info-text">Avg Height: {this.props.info.average_height}</div>
                    <div className="info-text">Avg Lifespan: {this.props.info.average_lifespan}</div>
                    <div className="info-text">Skin Colors: {this.props.info.skin_colors}</div>
                </div>

                <div className="right-info-container">
                    <div className="info-text">Language: {this.props.info.language}</div>
                    <div className="info-text">Designation: {this.props.info.designation}</div>
                    <div className="info-text">Hair Colors: {this.props.info.hair_colors}</div>
                </div>
            </>
        )
    }

}

export default SpeciesInfo;