import React, { useEffect } from 'react';
import './FloatingDiv.css';
import AOS from 'aos';
import 'aos/dist/aos.css';




const FloatingDiv = ({image, text1, text2}) => {
    useEffect(()=> {
        AOS.init({duration: 1000});
    }, [])
    return (
        <div  data-aos="fade-down" className='floatingDiv'>
            <img src={image} alt="" />
            <span>{text1} {text2}</span>
        </div>
    );
};

export default FloatingDiv;