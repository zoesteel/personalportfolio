import React from 'react';
import { Link } from 'react-router-dom';

function Dynaco() {
  return (
        <div>
            <a href="http://dynaco.com" target="_blank" rel="noopener noreferrer" className="project-title">
                Dynaco
            </a>
            <p>Dynaco is a newly acquired division of Radial Engineering where I am an in-house Web Developer. In 2017, with new products hitting the market, my team was tasked with creating a website for Dynaco. Once the designer mocked up the design, I helped to put together the site. During this process I learned how to use Git and command line. The site is fully responsive, using Bootstrap 3. I really like the colours of the design and feel that the overall look of the site reflects the high quality products of the Dynaco brand. </p>
            <img src="images/dynaco.jpg" alt="Dynaco website" className="project-img" />

            <p className="tools">Tools used: HTML, SCSS, JavaScript, Git, Bootstrap </p> 
            <Link to="/" className="homelink">
                &lt; Back 
            </Link>
        </div>
  )
}

export default Dynaco;