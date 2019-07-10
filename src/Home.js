import React from 'react';
import Intro from './Intro';
import Project from './Project';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div>
            <Intro />
            <h3>Projects</h3>
                <div className="projects">

                    <Link to="/radial">            
                        <Project
                        name='Radial Engineering'
                        />   
                    </Link>    

                    <Link to="/jimrhodes">        
                        <Project
                        name='Jim Rhodes Music'
                        />
                    </Link>

                    <Link to="/portfolio">                
                        <Project
                        name='Portfolio'               
                        />
                    </Link>

                    <Link to="/dynaco">
                        <Project
                            name='Dynaco'
                        />
                    </Link>
                    
                    <Link to="/dogwood">
                        <Project
                            name='Dogwood Rescue'
                        />
                    </Link>

                    <Link to="/inwardedward">
                        <Project
                            name='Inward Edward'
                        />            
                    </Link>    
                </div>{/* end projects */}  

                <h3>Contact Me</h3>
                <p>zoeysteel @ gmail.com</p>          
            </div>  
        )
    }