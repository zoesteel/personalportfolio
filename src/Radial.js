import React from 'react';
import {  Link } from 'react-router-dom';

function Radial() {
  return (
    <div>
        <a href="http://radialeng.com" target="_blank" rel="noopener noreferrer" className="project-title">
            Radial Engineering
        </a>
        <p>For the past two years I have been working as a Web Developer at Radial Engineering. In summer 2017 we began to design and plan a new website using a CMS (WordPress). I have been heavily involved in the creation of the site, creating assets using HTML, SCSS, JavaScript and jQuery. I also improved my skills in WordPress, creating templates and pages using PHP. For this project we employed a Kanban methodology, using two week sprints. My favourite part about this redesign is how much of a departure it is from the previous site, with a much more refreshed and clean design.</p>

        <p>The previous site was busy looking and not at all responsive, with a difficult to navigate menu:</p>

        <img src="images/radialold.jpg" alt="Radial Engineering old website design" className="project-img" />
        
        <p>The new site features a search function and easily filtered products. It also has capability for ecommerce in the future. The design is sleek and modern with high resolution images. It is now fully responsive, using Bootstrap 4, where the old design was only easily viewable on desktop.</p>

        <img src="images/radial-new.jpg" alt="Radial Engineering new website design" className="project-img" />
        <img src="images/radial-new-1.jpg" alt="Radial Engineering new website design" className="project-img" />

        <p className="tools">Tools Used: WordPress, Bootstrap 4, Flexbox, SCSS, JavaScript</p>

        <Link to="/" className="homelink">
         &lt; Back 
        </Link>
    </div>
  );
}

export default Radial;
