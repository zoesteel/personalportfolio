import React from 'react';
import { Link } from 'react-router-dom';

function InwardEdward() {
  return (
        <div>
            <a href="http://inwardedward.com" target="_new" rel="noopener noreferrer" className="project-title">
               Inward Edward
            </a>
           
            <p>I created a child theme for the WordPress theme OneTone, for an independent musical short, Inward Edward. This film will be shown at film festivals around the world.</p>

            <p>This was my first attempt at using Bootstrap and it was a good introduction to it although I could have used it more effectively. The design was heavily influenced by the parent theme with modifications from the client. I like the colour scheme, the parallax effect and the fade in scroll effect (using jQuery). I enjoy the overall look and feel of the site which reflects the style of the musical. However, although the site is made with WordPress, the news section is not easily editable by the client, which would be much more convenient. Being somewhat inexperienced with WordPress this site took a lot longer than I would have liked, and I ran into problems with the client’s limitations on the server side, but it was a good learning experience.</p>

            <img src="images/inwardedward.jpg" alt="Inward Edward movie website" className="project-img" />

            <img src="images/inwardedward-1.jpg" alt="Inward Edward movie website" className="project-img" />

            <p className="tools">Tools used: WordPress, Bootstrap 3, jQuery, Flexbox, Photoshop</p>

            <Link to="/" className="homelink">
                &lt; Back 
            </Link>
        </div>
  )
}

export default InwardEdward;
