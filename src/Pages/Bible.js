import React, { useEffect, useState } from 'react';
import './Bible.css';
import TopSearchBarMenu from '../Components/TopSearchBarMenu';
import SideBarMenu from '../Components/SideBarMenu';
import { FaRegLightbulb } from "react-icons/fa";
import KoreanBibleData from '../Components/Assets/bibleKOR.json';



export const Bible = () => {
    const [showNav, setShowNav] = useState(true);

    const [bibleData, setBibleData] = useState([]);
    const [randomVerse, setRandomVerse] = useState('');



    useEffect(() => {
        // Fetch and set the Bible data when the component mounts
        setBibleData(KoreanBibleData);
        //console.log('Korean Bible Data:', KoreanBibleData);

        // Get and set a random verse when the component mounts
        const verse = getRandomVerse();
        setRandomVerse(verse);
    }, []);

    const getRandomVerse = () => {
        // Generate a random index to select a book
        const randomBookIndex = Math.floor(Math.random() * KoreanBibleData.length);
        const randomBook = KoreanBibleData[randomBookIndex];

        // Select a random chapter from the selected book
        const randomChapterIndex = Math.floor(Math.random() * randomBook.chapters.length);
        const randomChapter = randomBook.chapters[randomChapterIndex];

        // Select a random verse from the selected chapter
        const randomVerseIndex = Math.floor(Math.random() * randomChapter.length);
        const randomVerse = randomChapter[randomVerseIndex];

        // Get the chapter and verse numbers
        const chapterNumber = randomChapterIndex + 1;
        const verseNumber = randomVerseIndex + 1;

        // Return an object containing the verse text, chapter number, and verse number
        return {
            book: randomBook.abbrev,
            verse: randomVerse,
            chapter: chapterNumber,
            verseNumber: verseNumber
        };
    };

    console.log("Random Verse:: ", randomVerse);
    return (
        <div className='dashboard'>

            <p>This is Bible Page</p>
            <FaRegLightbulb onClick={() => setShowNav(!showNav)} className="hamburgerMenu" />
            <TopSearchBarMenu />

            <div className='homeMain'>
                <SideBarMenu show={showNav} />

                <div className='dashboard-container'>

                    <div className='top-container'>
                        <div className='t1'>Any Title</div>
                    </div>

                    <div className='bottom-container'>
                        <div className='b-1'><h1>Old</h1></div>
                        <div className='b-2'><h1>New</h1></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bible;