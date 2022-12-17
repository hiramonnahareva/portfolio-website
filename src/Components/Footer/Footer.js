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
            background: darkMode? 'linear-gradient(250deg, hsl(240deg 47% 19%) 0%, hsl(280deg 39% 25%) 100%)' : '',
            color: darkMode? 'white' : '',
        }}
        >
            <div className="footer-info">
            <div>
                <h2 className='footer-title'
                style={{
                    color: darkMode? 'white' : '',
                }}
                > Hiramon Nahar Eva </h2>
            </div>
            </div>
            <div className='footer-icon'>
            <span ><a href='https://www.linkedin.com/in/deveva'> <CiLinkedin/></a></span> <span><a href='https://github.com/hiramonnahareva'> <SlSocialGithub/></a> </span> <span><a href='https://www.instagram.com'>  <CiInstagram/></a> </span> <span><a href='https://www.twitter.com'> <CiTwitter/></a></span>
            </div>

            <div className="hr-container">
            <div className='hr'
             />
            </div>
            
            <p className='copy-right'>&copy; {year} hiramonnahareva</p>
        </div>
    );
};

export default Footer;