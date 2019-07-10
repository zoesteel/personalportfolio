import React from 'react';

export default function Intro() {
    return(
        <div className="intro">
            <p>
            I'm a Front End Developer from Oxford, England and have been living in Vancouver for 8 years. I graduated from the <a href="https://bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer"> Technical Web Designer</a> program at BCIT in 2016, and since then I have been working as a Front End Developer at <a href="http://radialeng.com" target="_blank" rel="noopener noreferrer">Radial Engineering</a>. I enjoy bringing beautiful and functional designs to life using various technologies, and I am always learning more.
            </p>
            <p className="links">
                
                <a href="http://codepen.io/zoesteel" target="_blank" rel="noopener noreferrer">@zoesteel on Codepen</a>
                <br />
                <a href="http://github.com/zoesteel" target="_blank" rel="noopener noreferrer">@zoesteel on Github</a>
            </p>
            
            <h3>Skills</h3>            
            <p className="languages">
                HTML, SCSS, JavaScript, React, Node.js, WordPress, Git, MySQL, Java, jQuery, CSS Grid, Flexbox, Bootstrap.
            </p>            
            <h3>What I'm Working On</h3> 
            <p>I'm currently finishing up four classes I took at BCIT this semester: 
                <ul>
                    <li>React and Modern Javascript</li>
                    <li>Node JS Fundamentals</li>
                    <li>Introduction to Software Development (Java)</li>
                    <li>Relational Databases and SQL</li>
                </ul>
            </p>
        </div>
    )
}