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
                    <div className='title-container'>
                        <p>any title??</p>
                    </div>
                    <div className='chart-container'>
                        <div className='bar-chart'>
                            <p>Bar chart</p>
                        </div>    
                    
                        <div className='duo-container'>
                            <div className='pie-chart'>
                                <h1>pieChart</h1>
                            </div>
                            <div className='recent-note-container'>
                                <h1>recent note</h1>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Home;