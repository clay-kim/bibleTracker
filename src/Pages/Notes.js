import React, { useState } from 'react';
import './Notes.css';
import TopSearchBarMenu from '../Components/TopSearchBarMenu';
import SideBarMenu from '../Components/SideBarMenu';
import { FaRegLightbulb } from "react-icons/fa";

export const Notes = (randomVerse) => {
    const [showNav, setShowNav] = useState(true);
    const { book, chapter, verse, verseNumber } = randomVerse.randomVerse || {};

    return (
        <div className='dashboard'>

            <p>This is Notes Page</p>
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

                <div className='dashboard-container'>

                    <div className='top-container-note'>
                        <div className='note-t1'>Reflection</div>
                    </div>

                    <div className='bottom-container-note'>
                        <div className='note-b1'>
                            <div className='note-dropdown-container'>
                                DropDown menus
                            </div>
                            <div className='note-input-container'>
                                InputBox
                            </div>
                        </div>
                        <div className='noteList-container'><h1>List</h1></div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Notes;