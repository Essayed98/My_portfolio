import React from 'react'
import './about.css'
import Me from '../../assests/me3.png'
import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt='About image'></img>
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFillAwardFill className="about__icon"/>
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>2+</small>
            </article>
            <article className='about__card'>
              <FaFolderOpen className="about__icon"/>
              <h5>Projects</h5>
              <small>8+</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Commodi excepturi facere 
            eligendi, magnam perferendis et nostrum cumque 
            delectus aliquid ut doloremque ad fuga omnis inventore? 
            Repellat placeat distinctio soluta neque!</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
    </section >
  )
}

export default About