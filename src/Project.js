import React, { Component } from 'react';

class Project extends Component {
    
    render(){
        return (           
            <div className="project">
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default Project;