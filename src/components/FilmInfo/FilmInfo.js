import React from 'react';

class FilmInfo extends React.Component {
    
    render() {
        return (
            <>
                <div className="left-info-container">
                    <div className="info-text">Director: {this.props.info.director}</div>
                    <div className="info-text">Producer(s): {this.props.info.producer}</div>
                    <div className="info-text">Release Date: {this.props.info.release_date}</div>
                </div>
            </>
        )
    }

}

export default FilmInfo;