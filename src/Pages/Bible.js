import React, { useState } from 'react';
import './Bible.css';
import TopSearchBarMenu from '../Components/TopSearchBarMenu';
import SideBarMenu from '../Components/SideBarMenu';
import { FaRegLightbulb } from "react-icons/fa";
import KoreanBibleData from '../Components/Assets/bibleKOR.json';
import { getFullBookName, bookNames } from '../Components/BibleUtil.js';
import { Link, useNavigate } from 'react-router-dom';
import DailyVerse from '../Components/DailyVerse.js';

export const Bible = (randomVerse) => {
    const [showNav, setShowNav] = useState(true);
    const { bookAbbreviations, book, chapter, verse, verseNumber } = randomVerse.randomVerse || {};

    const handleBookClick = (bookAbbrev) => {
        const selectedBook = KoreanBibleData.find(book => book.abbrev === bookAbbrev);
        if (selectedBook) {

        } else {
            console.log(`Book ${bookAbbrev} not found in KoreanBibleData.`);
        }
    };

    const navigate = useNavigate();
    // read the chapter from 'daily scripture'
    const handleSearch = () => {
        navigate(`/bible/${bookAbbreviations}/${chapter}`);
    };


    return (
        <div className='dashboard'>

            <p>This is Bible Page</p>
            <FaRegLightbulb onClick={() => setShowNav(!showNav)} className="hamburgerMenu" />
            <TopSearchBarMenu />

            <div className='homeMain'>
                <DailyVerse randomVerse={randomVerse} />
                <SideBarMenu show={showNav} />

                <div className='dashboard-container-bible'>
                    <div className='bottom-container'>

                        <div className='b-1'>
                            <h1>Old</h1>
                            <ul className="book-list">
                                {Object.keys(bookNames).slice(0, 39).map((bookAbbrev) => (
                                    <li key={bookAbbrev}>
                                        <Link to={`/bible/${bookAbbrev}`} className="book-link" onClick={() => handleBookClick(bookAbbrev)}>{getFullBookName(bookAbbrev)}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='b-2'>
                            <h1>New</h1>
                            <ul className="book-list">
                                {Object.keys(bookNames).slice(39, 66).map((bookAbbrev) => (
                                    <li key={bookAbbrev}>
                                        <Link to={`/bible/${bookAbbrev}`} className="book-link" onClick={() => handleBookClick(bookAbbrev)}>{getFullBookName(bookAbbrev)}</Link>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Bible;