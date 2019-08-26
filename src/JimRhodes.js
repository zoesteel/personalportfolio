import React from 'react';
import { Link } from 'react-router-dom';

function JimRhodes() {
  return (
        <div>
            <a href="http://jimrhodesmusic.com" target="_blank" rel="noopener noreferrer" className="project-title">
                Jim Rhodes Music
            </a>
            <p>I created a website for a local musician using WordPress, so it can be easily updated by the client. Using Advanced Custom Fields, the client is able to add his own news, show dates, videos and photos. I am happy with the design of this site and the use of WordPress for a simple experience for the client.</p>
            <img src="images/jim-rhodes.jpg" alt="Jim Rhodes Musician website" className="project-img" />
        
            <p className="tools">Tools used: WordPress, CSS, PHP, Photoshop, Bootstrap 4, Flexbox, jQuery</p>
            <Link to="/" className="homelink">
                &lt; Back 
            </Link>
        </div>
  )
}

export default JimRhodes;
