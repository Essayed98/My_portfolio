import React from 'react'
import CV from '../../assests/cv.pdf'


const Cv = () => {
  return (
    <div className="cv">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>let's talk</a>
    </div>

  )
}

export default Cv