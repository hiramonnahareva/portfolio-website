import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import Toggle from '../Toggle/Toggle';
import image from '../../img/logo1.png';
import { BsThreeDots } from 'react-icons/bs';
import { themeContext } from '../../Context';

const Navbar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content =  <>
     <div className= "nav-list">
                   <ul style={{listStyleType: 'none'}}>
    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
     <li>Home</li>
     </Link>
     <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
     <li>Services</li>
     </Link>
     <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
     <li>Experience</li>
     </Link>
     <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
     <li>Portfolio</li>
     </Link>
     <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
     <li>Contact</li>
     </Link>
     </ul>
                   </div>
                    <a href="https://drive.google.com/file/d/1MvU-nd2BFiyTWd2mqFzqOfweXbWnAp9a/view" target="_blank"><button className='button' id='manu-btn'>Resume</button></a>
                    <Toggle/>
    </>
    return (
        <div className='nav-wrapper '>
            <div className="nav-left">
                <div className="nav-name">
                    <img width={72} src={image} alt="" />
                </div>
                    </div>
                <div  className={`nav-right ${click ?  'menu-item' : 'menu-display-none'}`}
                      style={click ? {background: darkMode? "hsl(240deg 47% 19%)" : ''} : null}
                       >
                  {content}
                </div>
                
                <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <BsThreeDots />}
                    </div>
               

           
            
        </div>
    );
};

export default Navbar;