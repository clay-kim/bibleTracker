import React, { useEffect, useState } from 'react';
import './Bible.css';
import TopSearchBarMenu from '../Components/TopSearchBarMenu';
import SideBarMenu from '../Components/SideBarMenu';
import { FaRegLightbulb } from "react-icons/fa";
import KoreanBibleData from '../Components/Assets/bibleKOR.json';
import { getFullBookName, bookNames } from '../Components/BibleUtil.js';
import ReadBible from './ReadBible.js';
import { Link } from 'react-router-dom';


export const Bible = (randomVerse) => {
    const [showNav, setShowNav] = useState(true);
    const { book, chapter, verse, verseNumber } = randomVerse.randomVerse || {};

    const handleBookClick = (bookAbbrev) => {
        const selectedBook = KoreanBibleData.find(book => book.abbrev === bookAbbrev);
        if (selectedBook) {

        } else {
            console.log(`Book ${bookAbbrev} not found in KoreanBibleData.`);
        }
    };


    return (
        <div className='dashboard'>

            <p>This is Bible Page</p>
            <FaRegLightbulb onClick={() => setShowNav(!showNav)} className="hamburgerMenu" />
            <TopSearchBarMenu />

            <div className='homeMain'>
                <div className='daily-bible-verse'>
                    <p>Daily Word of God</p>
                    <p>{book} {chapter} : {verseNumber}</p>
                    <p>"{verse}"</p>
                    <p>{book} {chapter}장 읽기</p>
                </div>
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