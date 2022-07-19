import React, { useRef } from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaPhoneAlt, FaMapMarkerAlt} from 'react-icons/fa'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b52g5l6', 'template_ttlca9i', form.current, 'G5ncXHWTZnYJyULAL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section>
      <div className="inner-section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact-container">
          <div className="contact-options">
            <article className="contact-option">
            <FaPhoneAlt className='contact-option-icon'/>
              <h4>Contact Number</h4>
              <a href="#phone"><h5 id='phone'>+91 9560199845</h5></a>
            </article>
            <article className="contact-option">
            <MdEmail className='contact-option-icon'/>
              <h4>Email</h4>
              <a href="mailto:bishnuamola9@gmail.com"><h5>bishnuamola9@gmail.com</h5></a>
            </article>
            <article className="contact-option">
            <FaMapMarkerAlt className='contact-option-icon'/>
              <h4>Location</h4>
              <a href="#location"><h5 id='location'>Rishikesh, Uttarakhand, India</h5></a>
            </article>
          </div>
          <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name*" required/>
              <input type="text" name="subject" placeholder="Subject*" required/>
              <input type="email" name="email" placeholder="Your Email*" required/>
              <textarea name="message" placeholder="Your Message*" rows="7"></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact