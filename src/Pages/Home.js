import React, { useState } from 'react';
import './Home.css';
import TopSearchBarMenu from '../Components/TopSearchBarMenu';
import SideBarMenu from '../Components/SideBarMenu';
import { FaRegLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DailyVerse from '../Components/DailyVerse';

export const Home = (randomVerse) => {
    const [showNav, setShowNav] = useState(true);
    const { bookAbbreviations, book, chapter, verse, verseNumber } = randomVerse.randomVerse || {};
    const navigate = useNavigate();

    // read the chapter from 'daily scripture'
    const handleSearch = () => {
        navigate(`/bible/${bookAbbreviations}/${chapter}`);
    };

    return (
        <div className='dashboard'>
            <p>This is Home</p>
            <FaRegLightbulb onClick={() => setShowNav(!showNav)} className="hamburgerMenu" />
            <TopSearchBarMenu />

            <div className='homeMain-home'>
                <DailyVerse randomVerse={randomVerse} />
                <SideBarMenu show={showNav} />

                <div className='dashboard-container-home'>
                    <div className='trio-container'>

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