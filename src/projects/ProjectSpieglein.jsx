import React from 'react'
import spieglein from '../assets/spieglein-10.jpg';
import '../index.css';

function ProjectSpieglein() {
  return (
    <div className="project-page">
      <h1>SPIEGLEIN, SPIEGLEIN AN DER WAND (2021)</h1>
      <img src={spieglein} alt="Spieglein" />
      <p className="project-description">How objectively can a mirror actually reflect the self? 
      Should the own mirror image be understood as a raw reflection of the optical self and if so,
      when and how does a selfie become a representation of self-deception?</p>
      <p className="project-description">Spieglein, Spieglein an der Wand draws upon photography and 
      capitalm in form of a series of mirror selfies in the fitting room of clothing stores.
      A visual research that raises questions about identity and selfhood in a contemporary surveillance 
      culture that glorifies both. 
      Because without a private space for identity formation and the shielding of intimate 
      details from others: can public space as we know it continue to be constituted in this way? 
      In other words, how unobserved does a healthy self-image present itself in the always commercial 
      context of a locker room? At what point does the selfie become the perfect picture to share and
     most importantly: where, mirror, mirror on the wall, can I take the most beautiful selfie of them all?</p>

      <p className="project-description">https://webspace.merz-akademie.de/~delaina.hasca/</p>
    </div>
  )
}

export default ProjectSpieglein