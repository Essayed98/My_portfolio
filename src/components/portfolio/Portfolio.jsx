import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/Portfolio1.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item__BTNBLOC">
            <a href="https://github.com/Essayed98" className='btn' target='_blank'>Github</a>
            <a href="https://www.piscinetunisie.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item__BTNBLOC">
            <a href="https://github.com/Essayed98" className='btn' target='_blank'>Github</a>
            <a href="https://www.piscinetunisie.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item__BTNBLOC">
            <a href="https://github.com/Essayed98" className='btn' target='_blank'>Github</a>
            <a href="https://www.piscinetunisie.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Portfolio