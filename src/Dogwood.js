import React from 'react';
import { Link } from 'react-router-dom';

function Dogwood() {
  return (
        <div>
            <h3 className="project-title">Dogwood Rescue Society</h3>
                
            <p>This was my final project at BCIT. In a group of 3, we created a fully responsive and accessible WordPress theme, using the Underscores.me starter theme, for a dog rescue. After our initial meeting with the client, we began by planning the information architecture. Next, we moved to the design phase, where I particularly had a lot of input and was able to redesign the rescue’s logo.</p>

            <p>This was the organisation’s previously used logo:</p>

            <img src="images/dogwood-old-logo.jpg" alt="Dogwood Rescue old logo design" className="project-img" />

            <p>I updated and cleaned up the existing logo according to the client’s preferences. I feel that this look is more modern and fitting with the desired aesthetic.</p>

            <img src="images/dogwood-new-logo.png" alt="Dogwood Rescue new logo design" className="project-img" />

            <p>Once the design of the whole site was finalised with the client, we moved onto the development phase. Particularly time consuming was making the site responsive. In the future I would design something like this for mobile first.</p>

            <p>I’m proud of the outcome and happy that I got to make a website for a cause I fully support.</p>

            <p>As of July 2019 the site is still not live due to issues on the client’s side but I will be working with them to get it online ASAP.</p>

            <img src="images/dogwood.jpg" alt="Dogwood Rescue website" className="project-img" />
            <img src="images/dogwood-1.jpg" alt="Dogwood Rescue adoption page" className="project-img" width="40%" />


            <p className="tools">Tools used: WordPress, PHP, CSS, JavaScript, Photoshop, Illustrator</p>
            
            <Link to="/" className="homelink">
                &lt; Back 
            </Link>
        </div>
  )
}

export default Dogwood;
