import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xk6vkv', 'template_lqdrcl9', form.current ,'zn-fi18ihvrI-l6W7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };
  return (
    
    <section id='contact'>
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bkessayed@gmail.com</h5>
            <a href="mailto:bkessayed@gmail.com" target="__blank">Send a message </a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin contact__option-icon />
            <h4>Linkedin</h4>
            <h5>Essayed Ben kram </h5>
            <a href="https://www.linkedin.com/in/essayed-ben-kram-b148b5196/" target="__blank">Text me </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp contact__option-icon />
            <h4>Whatsapp</h4>
            <h5>(+216) 21 195 445</h5>
            <a href=" https://wa.me/+21621195445" target="__blank">Send a message </a>
          </article>
        </div>
        {  /* End OF CONTACT OPTIONS */}
       {/* <from ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Eamil ' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required ></textarea>
          <input type="submit"  className='btn btn-primary' value="Send Message" />
        </from>
  */}
       {} <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required  />
      <label>Email</label>
      <input type="email" name="email" required  />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" className='btn btn-primary' value="Send" required  />
    </form> 
      </div>

    </section>
  )
}

export default Contact