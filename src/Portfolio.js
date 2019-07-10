import React from 'react';
import { Link } from 'react-router-dom';


function Portfolio() {
  return (
    <div>
      <h3 className="project-title">Portfolio</h3>
      <p>Design is not necessarily my strong point although it is something I enjoy attempting. This portfolio page was a collection of elements I thought looked interesting and challenging to build. I wanted to make something eye catching and simple that is also very responsive and lightweight. I originally started a couple of months ago, but upon finishing a course in React I wanted to see if I could rebuild it using what I've learned. It was fun to make in React although it's probably overkill for such a simple site.</p>
      <p>This was also my second time building something using CSS Grid. It took a while to figure it out but in the end I prefer using this in combination with Flexbox much more than Bootstrap.</p>
      <p className="tools">Tools used: React, CSS Grid, Flexbox</p>
      <Link to="/" className="homelink">
         &lt; Back 
      </Link>
    </div>
  );
}

export default Portfolio;