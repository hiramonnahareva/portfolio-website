import React, { useContext, useEffect } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import crown from '../../img/crown.png';
import './Intro.css';
import profile from '../../img/Hiramon-Nahar-HQ.jpg'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import shape from '../../img/shape-9.png';
import Aos from 'aos';
import { themeContext } from '../../Context';
import { Link } from 'react-scroll';

const Intro = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
        useEffect(()=> {
            Aos.init({duration: 1000});
        }, [])
    return (
        <div className='intro'>
         <div data-aos="fade-right" className="intro-left">
             <div className="intro-name">
                <span
                style={{
                    color: darkMode? 'white' : '',
                  }}
                >Hi! I am</span>
                <span>Hiramon Nahar Eva</span>
                <span
                style={{
                    color: darkMode? '#d3d3d3' : '',
                  }}
                >I am a Junior Frontend Developer who is passionate about coding. I like learning new things and also facing new challenges which improve my skills. when I solve a problem after wasting a few moments it makes me so pleased. So, I always search for an environment where I can improve myself. This year learned html, css, javascript, react and Redux.</span>
             </div>
             <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'><button className='button intro-btn'>Hire Me</button></Link>
                <div className='intro-icons'>
                <a href="https://github.com/hiramonnahareva" target='_blank'><FiGithub className='icon'/></a>
                <a href="https://www.linkedin.com/in/deveva/" target='_blank'><FiLinkedin className='icon'/></a>
                <a href="https://www.instagram.com/dev_eva_/" target='_blank'><BsInstagram className='icon'/></a>
                </div>
             </div>   
             <div data-aos="fade-left" className="intro-right">
                <img className='image' src={shape} alt="" />
                <img className='profile' src={profile} alt="" />
                <div style={{top: '50%', left: '65%'}}>
                    <FloatingDiv image={crown} text1='Web' text2='Developer'>

                    </FloatingDiv>
                </div>
             <div className= {`${darkMode? '' : 'blur'}`}
              style={{background: 'rgb(253 220 228)'}}>
             </div>
             <div className= {`${darkMode? '' : 'blur'}`} style={{
                 background: darkMode? '' : '#ffc1e4' , 
                 top: '19rem',
                 width: '21rem',
                 height: '11rem',
                 left:'-4rem',
            }}>
             </div>
             </div>
        </div>
    );
};

export default Intro;