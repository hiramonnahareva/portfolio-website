import React from 'react';
import {BiSun, BiMoon} from 'react-icons/bi';
import {ImSun} from 'react-icons/im';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import './Toggle.css';
const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({type: "toggle"})
    }
    
    return (
        <div onClick={handleClick} className='toggle'>
            <BiMoon/>
            <BiSun/>
            <div
            style={darkMode? {left: '2px'} : {right: '2px'}}
             className="t-button"
             >
                
            </div>
        </div>
    );
};

export default Toggle;