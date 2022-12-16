import React, { useContext } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci'; 
import { SlSocialGithub } from 'react-icons/sl'; 
import { themeContext } from '../../Context';
import './Footer.css' ;
const Footer = () => {
    const year = new Date().getFullYear()
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        
        <div className='footer-container' 
        style={{
            background: darkMode? '#000000' : '',
            color: darkMode? 'white' : '',
        }}
        >
            <div className="footer-info">
            <div>
                <h1 className='footer-title'
                style={{
                    background: darkMode? '#000000' : '',
                    color: darkMode? '#e726ad' : '',
                }}
                > Hiramon Nahar Eva </h1>
                <span>&copy; {year} hiramonnahareva</span>
            </div>
            </div>
            <div className="hr-container">
            <div className='hr'
            style={{
                background: darkMode? '#000000' : '',
                borderTop: darkMode? '1px solid #e726ad' : '',
            }}
             />
            </div>
            <div className='footer-icon'>
            <span ><a href='https://www.linkedin.com/in/deveva'> <CiLinkedin/></a></span> <span><a href='https://github.com/hiramonnahareva'> <SlSocialGithub/></a> </span> <span><a href='https://www.instagram.com'>  <CiInstagram/></a> </span> <span><a href='https://www.twitter.com'> <CiTwitter/></a></span>
            </div>
        </div>
    );
};

export default Footer;