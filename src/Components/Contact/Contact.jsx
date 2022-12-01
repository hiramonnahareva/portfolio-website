import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiFillGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
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
        console.log(result.text);
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
                <a href="https://github.com/hiramonnahareva" target='_blank'><AiFillGithub className='c-icon'/></a>
                <a href="https://www.linkedin.com/in/deveva/" target='_blank'><ImLinkedin2 className='c-icon'/></a>
                <a href="https://www.instagram.com/dev_eva_/" target='_blank'><BsInstagram className='c-icon'/></a>
                </div>
           </div>
            </div>
            <div className="right-side">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className='user' placeholder='Name'/>
                <input type="email" name="to_name" className='user' placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" className='button' value="send"/>
            </form>

            </div>
        </div>
    );
};

export default Contact;