import React, { useContext, useEffect } from 'react';
import {SiRedux, SiReact} from 'react-icons/si';
import {TbBrandJavascript} from 'react-icons/tb';
import './Services.css';
import Heart from '../../img/heartemoji.png';
import Card from './Card/Card';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { themeContext } from '../../Context';


const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    return (
        <div className='services' id='Services'>
            {/* right side */}
            <div className='right-services'>
            <div data-aos="zoom-in-down" className='single-service'>
                <TbBrandJavascript className='icon'/>
                <h2>Javascript</h2>
                <span> JavaScript is the programming language of the Web.</span>
                </div>
                <div data-aos="zoom-in-down" id='service-middle' className='single-service'>
                <SiReact className='icon'/>
                <h2>React</h2>
                <span>React is a declarative, efficient, and flexible JavaScript library.</span>
                </div>
                <div data-aos="zoom-in-down" className='single-service'>
                <SiRedux className='icon'/>
                <h2>Redux</h2>
                <span>Redux is a predictable state container for JavaScript apps.</span>
                </div>
            </div>
            
            {/* left side */}
            <div data-aos="fade-left" className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
                <span>Services</span>
                <span 
                style={{color: darkMode? '#d3d3d3' : ''}}
                className={'service-detail'}
                >I have a good idea of HTML5, CSS3 for designing a web page and javascript for making a web page interactive as well good at react which is a javascript framework. As a CSS framework, I am good at Bootstrap5 & tailwind at the same time I know about GitHub, Netlify, Heroku, Visual Studio Code, Git, MS word, PowerPoint, and Figma. I have basic ideas at Node.js, Mongo DB, experss.js
                </span>

                <a href="file.pdf" download='Resume'><button className='button service-btn'>Download</button></a>
                <div className={`${darkMode ?  '' : "blur s-bulr1"}`} style={{background: darkMode? '' : '#fadced'}}></div>
            </div>
            <div className="cards">
                <div>
                    <Card
                    emoji = {Heart}
                    header={'design'}
                    detail = {'Figma, sketch, Photoshop, andobe xd'}
                    ></Card>
                </div>
            </div>
            
        </div>
    );
};

export default Services;