import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Pages/Home.css';

export const DailyVerse = (randomVerse) => {
    const { bookAbbreviations, book, chapter, verse, verseNumber } = randomVerse.randomVerse.randomVerse || {};

  

    const navigate = useNavigate();
    // read the chapter from 'daily scripture'
    const handleSearch = () => {
        navigate(`/bible/${bookAbbreviations}/${chapter}`);
    };

    return (
        <div className='daily-bible-verse'>
            <p>Daily Word of God</p>
            <p>{book} {chapter} : {verseNumber}</p>
            <p>"{verse}"</p>
            <p onClick={handleSearch} >{book} {chapter} 장 읽기</p>
           
        </div>

    )
}

export default DailyVerse;