import React, { useState, useEffect } from 'react';
import './Home.css';
import TopSearchBarMenu from '../Components/TopSearchBarMenu';
import { useLocation } from 'react-router-dom';
import SideBarMenu from '../Components/SideBarMenu';
import { FaRegLightbulb } from "react-icons/fa";

export const Home = (randomVerse ) => {
    const location = useLocation();
    const username = location.state ? location.state.username : '';
    const [showNav, setShowNav] = useState(true);
    const { book, chapter, verse, verseNumber } = randomVerse.randomVerse || {};

    return (
        <div className='dashboard'>
            <p>This is Home</p>
            <FaRegLightbulb onClick={() => setShowNav(!showNav)} className="hamburgerMenu" />
            <TopSearchBarMenu />

            <div className='homeMain-home'>
                <div className='daily-bible-verse'>
                    <p>Daily Word of God</p>
                    <p>{book} {chapter} : {verseNumber}</p>
                    <p>"{verse}"</p>
                    <p>{book} {chapter}장 읽기</p>
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