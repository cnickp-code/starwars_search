import React from 'react';
import { NavLink } from 'react-router-dom';

class Result extends React.Component {

    render() {
        return (
            <div className="name-list-container">
                <NavLink to={`/info/${this.props.id}`} className='result-header'>{this.props.name} {this.props.title} </NavLink>
            </div>
        )
    }
}

export default Result;