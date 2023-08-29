import React from 'react'
import './experience.css'
import { MdOutlineFileDownloadDone } from 'react-icons/md'

const Experience = () => {
  return (
    <section id='exprience'>
      <h5>
        What Skills  I have </h5>
      <h2> My Expereience </h2>
      <div className="container expereince__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div> <h4>HMTL</h4>
                <small className='text-ligth'>Experienced</small></div>
            </acticle>
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div>
                <h4>CSS </h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </acticle>
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div>
                <h4>JAVASRIPT</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </acticle>
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div>
                <h4>ANGULAR</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </acticle>
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div>
              <h4>REACTJS</h4>
              <small className='text-ligth'>Intermediate</small>
</div>
            </acticle>
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
<div>
              <h4>VueJs</h4>
              <small className='text-ligth'>Beginner</small>
</div>
            </acticle>
          </div>
        </div>
        {/* END OF FRONTEND  */}
        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div>
                <h4>NodeJs</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </acticle>
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div>
                <h4>MongoDB </h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </acticle>
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div> <h4>PHP</h4>
              <small className='text-ligth'>Intermediate</small>
              </div>
             
            </acticle>
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div>
                <h4>MySql</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </acticle>
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div>
              <h4>Python</h4>
              <small className='text-ligth'>Intermediate</small>
              </div>
            </acticle>
            <acticle className="experience__details">
              <MdOutlineFileDownloadDone className="experience__detailsicon" />
              <div> <h4>SPRING BOOT</h4>
              <small className='text-ligth'>Academic</small></div>
             
              
            </acticle>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience