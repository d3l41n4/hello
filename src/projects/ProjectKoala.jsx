import React, { useEffect } from 'react';
import '../index.css';

function ProjectKoala() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className="project-page">
      <h1>NOT A KOALAS NATURAL HABITAT (2021)</h1>
      <img src="hello/assets/koala.png" alt="Koala" />
      <p className="project-description">Not a koalas natural habitat is a short film rotoscope animation 
      that deals with the distopian aftermath of endagered koalas from increasing australian bushfires.
      </p>
      <video className="project-video" controls>
        <source src="hello/assets/koala-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default ProjectKoala;
