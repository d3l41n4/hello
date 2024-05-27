import React from 'react';
import '../index.css';

function ProjectNextFrontiers() {


  return (
    <div className="project-page">
      <h1>NEXT FRONTIERS - APPLIED FICTION DAYS (2022)</h1>
      <img src="hello/assets/frontiers.png" alt="Frontiers" />
      <p className="project-description">Next Frontiers is a promotional video for the crossmedia congress 
      for Applied Fiction Days in Stuttgart that brings scientists in conversation with science fiction authors.
      </p>

      <p className="project-description"> My artistic work consisted in 3D modelling and animating
        the video and I have recorded and edited the sound of the voice over.
       </p>
      <video className="project-video" controls>
        <source src="hello/assets/frontiers-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default ProjectNextFrontiers