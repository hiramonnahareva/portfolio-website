import React, { useContext, useEffect } from 'react';
import {SiRedux, SiJavascript, SiReact} from 'react-icons/si';
import {TbBrandJavascript} from 'react-icons/tb';
import './Services.css';
import Heart from '../../img/heartemoji.png';
import glassesimoji from '../../img/glassesimoji.png';
// import Heart from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
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
                <span>Lorem ipsum dolor sit amet </span>
                </div>
                <div data-aos="zoom-in-down" id='service-middle' className='single-service'>
                <SiReact className='icon'/>
                <h2>React</h2>
                <span>Lorem ipsum dolor sit </span>
                </div>
                <div data-aos="zoom-in-down" className='single-service'>
                <SiRedux className='icon'/>
                <h2>Redux</h2>
                <span>Lorem ipsum dolor sit amet</span>
                </div>
            </div>
            
            {/* left side */}
            <div data-aos="fade-left" className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
                <span>Services</span>
                <span 
                style={{color: darkMode? '#d3d3d3' : ''}}
                className={'service-detail'}
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eos, cupiditate possimus, totam laboriosam facere nulla, quibusdam sunt corrupti est incidunt modi aperiam! Dolores tempore culpa saepe soluta officiis error.</span>

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