import Aos from 'aos';
import React, { useContext, useEffect } from 'react';
import CountUp from 'react-countup';
import { themeContext } from '../../Context';
import './Experience.css'

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    // }, [])
    return (
    //    <div className="container">
         <div id='Experience'>
            <div className="title">
                <h1 style={{color: darkMode? 'white' : ''}}>Experience</h1>
            </div>
            <div className='experience-con'>
                <div style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}} className='experience'>
                    <h2>HTML</h2>
                    <span 
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                     className='percentage'><CountUp start={0} end={70} duration={2} delay={0} />%</span>
                </div>
                <div
                style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}}
                className='experience'>
                    <h2>CSS</h2>
                    <span
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                    className='percentage'><CountUp start={0} end={80} duration={2} delay={0} />%</span>
                </div>
                <div
                style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}}
                className='experience'>
                    <h2>Javascript</h2>
                    <span
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                    className='percentage'><CountUp start={0} end={40} duration={2} delay={0} />%</span>
                </div>
                <div
                style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}}
                className='experience'>
                    <h2>React</h2>
                    <span 
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                    className='percentage'><CountUp start={0} end={50} duration={2} delay={0} />%</span>
                </div>
                <div
                style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}}
                className='experience'>
                    <h2>Redux</h2>
                    <span
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                    className='percentage'><CountUp start={0} end={30} duration={2} delay={0} />%</span>
                </div>
                <div
                style={{background: darkMode? 'black' : '', color: darkMode? '#ef3aa6' : ''}}
                className='experience'>
                    <h2>Next.js</h2>
                    <span
                    style={{background: darkMode? 'black' : '', color: darkMode? 'white' : ''}}
                    className='percentage'><CountUp start={0} end={10} duration={2} delay={0} />%</span>
                </div>
            </div>
        </div>
    //    </div>
    );
};

export default Experience;