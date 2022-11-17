import Aos from 'aos';
import React, { useContext, useEffect } from 'react';
import { themeContext } from '../../Context';
import './Experience.css'

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div id='Experience'>
            <div className="title">
                <h1 style={{color: darkMode? 'white' : ''}}>Experience</h1>
            </div>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='experience-con'>
                <div style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}} className='experience'>
                    <h2>HTML</h2>
                    <span 
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                     className='percentage'>70%</span>
                </div>
                <div
                style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}}
                className='experience'>
                    <h2>CSS</h2>
                    <span
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                    className='percentage'>80%</span>
                </div>
                <div
                style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}}
                className='experience'>
                    <h2>Javascript</h2>
                    <span
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                    className='percentage'>40%</span>
                </div>
                <div
                style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}}
                className='experience'>
                    <h2>React</h2>
                    <span 
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                    className='percentage'>50%</span>
                </div>
                <div
                style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}}
                className='experience'>
                    <h2>Redux</h2>
                    <span
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                    className='percentage'>10%</span>
                </div>
                <div
                style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}}
                className='experience'>
                    <h2>Next.js</h2>
                    <span
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                    className='percentage'>10%</span>
                </div>
            </div>
        </div>
    );
};

export default Experience;