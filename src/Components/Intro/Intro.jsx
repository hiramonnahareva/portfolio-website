import React, { useContext, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {ImLinkedin2} from 'react-icons/im';
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
                    // background: darkMode? 'black' : '',
                    color: darkMode? 'white' : '',
                  }}
                >Hi! I am</span>
                <span>Hiramon Nahar Eva</span>
                <span
                style={{
                    // background: darkMode? 'black' : '',
                    color: darkMode? '#d3d3d3' : '',
                  }}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae esse totam beatae deleniti sunt unde sint. Temporibus natus officiis facilis error, ea eius voluptates, molestias qui fugiat aut illo.</span>
             </div>
             <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'><button className='button intro-btn'>Hire Me</button></Link>
                <div className='intro-icons'>
                <a href="https://github.com/hiramonnahareva" target='_blank'><AiFillGithub className='icon'/></a>
                <a href="https://www.linkedin.com/in/deveva/" target='_blank'><ImLinkedin2 className='icon'/></a>
                <a href="https://www.instagram.com/dev_eva_/" target='_blank'><BsInstagram className='icon'/></a>
                </div>
             </div>   
             <div data-aos="fade-left" className="intro-right">
                <img className='image' src={shape} alt="" />
                <img className='profile' src={profile} alt="" />
                {/* <img src={vactor2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimji} alt="" /> */}
                <div style={{top: '50%', left: '65%'}}>
                    <FloatingDiv image={crown} text1='Web' text2='Developer'>

                    </FloatingDiv>
                </div>
                {/* <div style={{top: '-4%', left: '5%'}}>
                    <FloatingDiv image={thumbup} text1='Best Design' text2='Award'>
                    </FloatingDiv>
                    <FloatingDiv image={crown} text1='Web' text2='Developer'>

</FloatingDiv> */}
                {/* </div> */}
             {/* blur div */}
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