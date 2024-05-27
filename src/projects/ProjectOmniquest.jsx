import React from 'react'
import omniquest from '../assets/omniquest.png';
import omniquestVideo from '../assets/omniquest-video.mp4';
import omniquestDocument from '../assets/omniquest-dokument.pdf';
import '../index.css';


function ProjectOmniquest() {
  return (
    <div className="project-page">
      <h1>OMNIQUEST (2020)
      </h1>
      <img src={omniquest} alt="Koala" />
      <p className="project-description">Omniquest is a prototype application that took form in 2020
      during the cooperative online programm "Open Culture BW meet VR" organised by 
      the Media and Film society Baden-Württemberg. 
      
     
       </p>

       <p className="project-description"> The conceptual process was elaborated
       as part of the semester project  ... taught by Professor Mario Doulis and
       ...at the Merz Akademie in Stuttgart. During the first online introductions of
        the art museums and cultural institutions involved in the programm, Marina ... 
        and me showed similar interets in collaborainge with the Kunsthalle Karlruhe.
        The archival material of the Kunstalle Karlsruhe presented cultrual data dating
        back to ... and the everpresent question ofhow to make cultural data accesible 
        to the broad public. Not least because
of Covid-19, major established art museums have based their tickets sales
on mass gathering exhibitions, find themselves under threat.A valuable experience that specially in covid time,
        while making sense of information,on how we understand museums todayand how I relate 
        to private and public spaces and 
        the blurry inbetween.  I got to meet Marina ... two 
        years later and travel together to Karlsruhe and meet .... 
        The programm ended in a online final presentation between the art museums, 
       cultural institutions and students involved in the programm, centered around 
    

      
      
       </p>
      <video className="project-video" controls>
        <source src={omniquestVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <a href={omniquestDocument} className="project-document-link" target="_blank" rel="noopener noreferrer">
        View Koala Project Document
      </a>
    </div>
  )
}

export default ProjectOmniquest