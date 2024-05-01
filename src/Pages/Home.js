import React, { useState } from 'react';
import './Home.css';
import TopSearchBarMenu from '../Components/TopSearchBarMenu';
import { useLocation } from 'react-router-dom';
import SideBarMenu from '../Components/SideBarMenu';

import { FaRegLightbulb } from "react-icons/fa";

export const Home = () => {
    const location = useLocation();
    const username = location.state ? location.state.username : '';

    const [showNav, setShowNav] = useState(true);
    console.log('User Name: ' + username); // for the first time and then gone


    return (
        <div className='dashboard'>

            <p>This is Home</p>
            <FaRegLightbulb onClick={() => setShowNav(!showNav)} className="hamburgerMenu" />
            <TopSearchBarMenu />

            <div className='homeMain-home'>
            <div className='daily-bible-verse'>
                <p className='chapter'>Genesis 1:3-25 KJV</p>
                <p>"And God said, Let there be light: and there was light. And God saw the light, that it was good: and God divided the light from the darkness. And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day."</p>
            </div>
                <SideBarMenu show={showNav} />


                <div className='dashboard-container-home'>
                    <div className='trio-container'>
                        <div className='b1'>B1</div>
                        <div className='b2'>B2</div>
                        <div className='b3'>B3</div>
                    </div>
                    <div className='duo-container'>
                        <div className='title'><h1>Hello</h1></div>
                        <div className='title2'><h1>Home</h1></div>
                    </div>

                </div>
           
            </div>

        </div>
    )
}

export default Home;