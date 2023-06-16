import React from 'react'
import './services.css'
import { MdOutlineFileDownloadDone } from 'react-icons/md'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
      <article className="service">
        <div className="service__head">
          <h3>MERN STACK*n</h3>
        </div>
        <ul className="service__list">
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
      {/* MERN STACK*/}
      <article className="service">
        <div className="service__head">
          <h3>Wordpress</h3>
        </div>
        <ul className="service__list">
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
       {/* Wordpress */}
      <article className="service">
        <div className="service__head">
          <h3>MEAN STACK</h3>
        </div>
        <ul className="service__list">
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
 {/* MEAN STACK */}
      </div>
    </section>
  )
}

export default Services