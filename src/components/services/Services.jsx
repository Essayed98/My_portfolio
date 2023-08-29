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
          <h3>MERN STACK</h3>
        </div>
        <ul className="service__list">
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Design the MongoDB database schema to efficiently store and manage data.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Create RESTful APIs using Express.js to handle data operations and requests.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Design and build the user interface using React, creating components and views.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Implement Redux to manage the global state of the application.</p>
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
            <p>Install WordPress on a web server or hosting environment.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Choose a suitable theme for the website's design and layout.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Create and publish pages and posts with text, images, videos, and other media.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Install and activate plugins to add specific features and functionalities.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Regularly update WordPress core, themes, and plugins to ensure security and performance</p>
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
            <p>Set up MongoDB to establish a connection between the application and the database.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Create RESTful APIs using Express.js to handle data operations and requests.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Design and build the user interface using Angular, incorporating components and modules.</p>
          </li>
          <li>
            <MdOutlineFileDownloadDone className="service__list-icon" />
            <p>Deploy the application on a web server or cloud platform, ensuring its availability.(Heroku)</p>
          </li>
        </ul>
      </article>
 {/* MEAN STACK */}
      </div>
    </section>
  )
}

export default Services