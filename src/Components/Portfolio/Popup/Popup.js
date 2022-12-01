import React, { useContext, useEffect, useState } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import './Popup.css';
import { AiOutlineClose } from 'react-icons/ai';
import { themeContext } from '../../../Context';
import Aos from 'aos';
const Popup = ({ portfolio_pro, eventValues }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    console.log(eventValues)
    const [click, setClick] = useState(true);
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div className={`portfolio_popup ${!click ? 'popup-close' : ''}`}>
            <div className="portfolio_popup-inner" data-aos="zoom-in-down">
                {
                    portfolio_pro.filter(item => item.work_title === eventValues).map(item =>
                        <div style={{color: darkMode? 'black' : ''}} className="portfolio_popup-content">
                            <span className="portfolio_popup-close" onClick={handleClick}><AiOutlineClose /></span>
                            <div className="pp_thumbnail">
                                <img src={item.image} width='400px' alt="" className="portfolio_popup-img" />
                            </div>
                            <div className="portfolio_popup-info">
                                <div className="portfolio_popup-subtitle">Feature - <span>{item.feature}</span></div>
                                <div className="portfolio_popup-body">
                                    <h3 className="details_title"></h3>
                                    <p className="details_description">{item.details_description}</p>
                                    <ul className="details_info">
                                        <li>Create - <span>{item.createDate}</span></li>
                                        <li>Technologies - <span>{item.tech_name}</span></li>
                                        <li>Role - <span>{item.role_name}</span></li>
                                        <li>View - <span><a target='_blank' href={`${item.liveLink}`}>Live Link</a></span></li>
                                    </ul>
                                    <div className='code-link'><a target='_blank' href={`${item.clientCode}`}><BiLinkExternal /> Client Code</a>{item.serverCode && <span><a target='_blank' href={`${item.serverCode}`}><BiLinkExternal /> Server code</a></span>}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        //    </dialog>
    );
};

export default Popup;