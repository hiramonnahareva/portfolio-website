import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import image from '../../img/Screenshot 2022-11-19 230647.png';
import image1 from '../../img/Screenshot 2022-11-20 135856.png';
import image2 from '../../img/Screenshot 2022-11-20 140217.png';
import image3 from '../../img/Screenshot 2022-11-20 001228.png';
import image4 from '../../img/Screenshot 2022-11-20 001812.png';
import image5 from '../../img/Screenshot 2022-11-20 140914.png';
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';
import Popup from './Popup/Popup';
import Aos from 'aos';

const Portfolio = () => {
    const portfolio_pro = [
        {
            id: 1,
            image: image,
            feature: "Web App", 
            work_title: "Menufecturing Industry",
            detail_title: 'MERN project',
            details_description: 'This Website is a full-stack project. I Implement here user login, Admin panel, Dashboard etc. This all website is a Responsive with navigetion menu.',
            createDate: "21 May 2022",
            tech_name: 'React, Node.js, daysiUI, mongoDB',
            role_name: "frontend",
            liveLink: "https://parts-manufacturer.web.app/",
            clientCode: 'https://github.com/hiramonnahareva/manufacturer-website-client-side',
            serverCode: 'https://github.com/hiramonnahareva/manufacturer-website-server-side',


        },
        {
            id: 2,
            image: image1,
            feature: "Web App",
            work_title: "Stock Spices",
            detail_title: 'MERN project',
            details_description: 'This Website is a full-stack project. I Implement here user login, Admin panel, Dashboard etc. This all website is a Responsive with navigetion menu.',
            createDate: "29 April 2022",
            tech_name: 'React Node.js',
            role_name: "frontend",
            liveLink: "https://spice-warehouse.firebaseapp.com/",
            clientCode: 'https://github.com/hiramonnahareva/warehouse-management-client-side',
            serverCode: 'https://github.com/hiramonnahareva/warehouse-management-server-side',


        },
        {
            id: 3,
            image: image2,
            feature: "Web App",
            work_title: "Wisdom Teeth Removal",
            detail_title: 'Frontend project',
            details_description: 'This Website is a full-stack project. I Implement here user login, Admin panel, Dashboard etc. This all website is a Responsive with navigetion menu.',
            createDate: "7 Jun 2022",
            tech_name: 'html, css, javascript',
            role_name: "frontend",
            liveLink: "https://assignment-10-9be48.web.app/",
            clientCode: 'https://github.com/hiramonnahareva/independent-service-provider',


        },
        {
            id: 4,
            image: image3,
            feature: "Web App",
            work_title: "Cat Food Review",
            detail_title: 'Frontend project',
            details_description: 'This Website is a frontend project. I Implement here user login, Admin panel, Dashboard etc. This all website is a Responsive with navigetion menu.',
            createDate: "4 April 2022",
            tech_name: 'html, css, javascript',
            role_name: "frontend",
            liveLink: "https://elegant-melba-17c1b9.netlify.app/",
            clientCode: 'https://github.com/hiramonnahareva/product-analysis-website',


        },
        {
            id: 5,
            image: image4,
            feature: "Web App",
            work_title: "Beauty Products",
            detail_title: 'Frontend project',
            details_description: 'This Website is a frontend project. User choose a rendom Items. This all website is a Responsive with navigetion menu.',
            createDate: "26 March 2022",
            tech_name: 'html, css, javascript',
            role_name: "frontend",
            liveLink: "https://roaring-fudge-f5bbdc.netlify.app/",
            clientCode: 'https://github.com/hiramonnahareva/lucky-one-product',


        },
        {
            id: 6,
            image: image5,
            feature: "Web App",
            work_title: "Phone Shop",
            detail_title: 'Frontend project',
            details_description: 'This Website is a frontend project. I Implement here user login, Admin panel, Dashboard etc. This all website is a Responsive with navigetion menu.',
            createDate: "1 March 2022",
            tech_name: 'html, Row javascript',
            role_name: "frontend",
            liveLink: "https://agitated-lalande-caa9e0.netlify.app/",
            clientCode: 'https://github.com/hiramonnahareva/phone-hunter',


        },
    ]
    const [click, setClick] = useState(true);
    const [eventValues, seteventValues] = useState();

    const handleClick = (work_title) => {
        setClick(!click)
        seteventValues(work_title)
    }
    return (
        <div id='Portfolio'>
            <h1 className='portfolio-title'>My Portfolio</h1>
            <div className="work_container">
                {
                    portfolio_pro.map(item => <div className="work_card" onClick={() => handleClick(item.work_title)}>
                        <img src={item.image} width='286px' className='work_image' alt="" />
                        <h3 className="work_title">{item.work_title}</h3>
                        <span className="work_button">Demo <AiOutlineArrowRight className='work_button-icon' /></span>
                    </div>)
                }


            </div>
            {/* ---------- portfolio popup ----------- */}
            {
                !click && <Popup portfolio_pro={portfolio_pro} eventValues={eventValues}></Popup>
            }
        </div>
    );
};

export default Portfolio;