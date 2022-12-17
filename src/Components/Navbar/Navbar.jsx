import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Toggle from '../Toggle/Toggle';
import image from '../../img/logo.png';

const Navbar = () => {
    return (
        <div className='nav-wrapper'>
            <div className="nav-left">
                {/* <div className="nav-name">Eva</div> */}
                <div className="nav-name">
                    <img src={image} alt="" />
                </div>
                    <Toggle/>
                    </div>
                <div className="nav-right">
                   <div className="nav-list">
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
                    <a href="https://drive.google.com/file/d/1MvU-nd2BFiyTWd2mqFzqOfweXbWnAp9a/view" target="_blank"><button className='button'>Resume</button></a>
                </div>
               

           
            
        </div>
    );
};

export default Navbar;