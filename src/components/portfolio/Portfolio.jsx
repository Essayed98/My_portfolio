import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/Portfolio1.png'
import IMG2 from '../../assests/prestige.png'
import IMG3 from '../../assests/polydoor.png'

/* Data of Portfolio */

const data = [
  {
    id :1 ,
    Image: IMG1 ,
    Title : 'Société de Traitement Général des Eaux' ,
    Desciption :'https://www.linkedin.com/posts/essayed-ben-kram-b148b5196_wordpress-web-developpementweb-activity-7015992601543651328-sxWX?utm_source=share&utm_medium=member_desktop',
    Demo :'https://www.piscinetunisie.com/'
  } , 
  {
    id :2 ,
    Image: IMG3 ,
    Title : 'Polydoor' ,
    Desciption :'https://www.linkedin.com/posts/essayed-ben-kram-b148b5196_accueil-activity-7089594238119632896-GA6e?utm_source=share&utm_medium=member_desktop',
    Demo :'https://polydoor.tn/'
  } , 
  {
    id :3 ,
    Image: IMG2 ,
    Title : 'Prestige' ,
    Desciption :'https://www.linkedin.com/posts/essayed-ben-kram-b148b5196_prestige-parfums-paris-activity-7100414780972150784-goMw?utm_source=share&utm_medium=member_desktop',
    Demo :'https://www.prestigeparfums.com/'
  } , 
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
  data.map(({id , Image ,Title , Desciption ,Demo }) =>{
    return (
      <article key={id} className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={Image} alt={Title} />
          </div>
          <h3>{Title}</h3>
          <div className="portfolio__item__BTNBLOC">
            <a href= {Desciption}
            className='btn' target='_blank'>Description</a>
            <a href={Demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
    )
  })
}

      </div>
    </section>
  )
}

export default Portfolio