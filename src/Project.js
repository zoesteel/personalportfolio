import React, { Component } from 'react';

class Project extends Component {

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <a href="#">
                <div className="project">
                    <h3>{this.props.name}</h3>
                </div>
            </a>
        )
    }
}

export default Project;