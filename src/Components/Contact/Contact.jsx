import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { themeContext } from '../../Context';
import './Contact.css';
const Contact = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_kb5zotq', 'template_hx4vy36', form.current, 'QPsBNRpvFsbr7Kbf4')
    .then((result) => {
      swal("Good job!", "Your Message Successfully Sent.", "success");
    }, (error) => {
        console.log(error.text);
    });
};

    return (
        <div id='Contact' className='contact-form'>
            <div className='left-side'>
           <div>
           <span
           style={{
            color: darkMode? 'white' : '',
          }}
           >Contact Me</span> 
            <div className='contact-icons'>
                <a href="https://github.com/hiramonnahareva" target='_blank'><FiGithub className='c-icon'/></a>
                <a href="https://www.linkedin.com/in/deveva/" target='_blank'><FiLinkedin className='c-icon'/></a>
                <a href="https://www.instagram.com/dev_eva_/" target='_blank'><BsInstagram className='c-icon'/></a>
                </div>
           </div>
            </div>
            <div className="right-side">
            <form ref={form} onSubmit={sendEmail}>
                <input 
                style={{
                    color: darkMode? 'white' : '',
                  }}
                type="text" name="from_name" className='user' placeholder='Name' required/>
                <input
                style={{
                    color: darkMode? 'white' : '',
                  }} 
                 type="email" name="to_name" className='user' placeholder='Email' required/>
                <textarea
                style={{
                    color: darkMode? 'white' : '',
                  }}
                 name="message" className='user' placeholder='Message' required></textarea>
                <input type="submit" className='button' value="send"/>
            </form>

            </div>
        </div>
    );
};

export default Contact;