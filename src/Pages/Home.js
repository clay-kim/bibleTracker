import React, { useState, useEffect } from 'react';
import './Home.css';
import TopSearchBarMenu from '../Components/TopSearchBarMenu';
import SideBarMenu from '../Components/SideBarMenu';
import { FaRegLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DailyVerse from '../Components/DailyVerse';
import PieChart from '../Components/PieChart';
import BarChartBible from '../Components/BarChartBible';
import { bibleGroups, categoryColors } from "../Components/BibleUtil";
import NotesList from './NoteList';



export const Home = (randomVerse) => {
    const [showNav, setShowNav] = useState(true);
    const { bookAbbreviations, book, chapter, verse, verseNumber } = randomVerse.randomVerse || {};
    const navigate = useNavigate();
    // read the chapter from 'daily scripture'
    const handleSearch = () => {
        navigate(`/bible/${bookAbbreviations}/${chapter}`);
    };


    const [notes, setNotes] = useState([]);
    const [userId, setUserId] = useState('');


    useEffect(() => {
        const fetchNotes = async () => {
            const storedUserId = localStorage.getItem('userId');
            setUserId(storedUserId);

            if (storedUserId) {
                try {
                    const response = await fetch(`https://mih7zrpt8g.execute-api.us-west-1.amazonaws.com/default/notes?userId=${storedUserId}`);
                    const data = await response.json();
                    setNotes(data);
                    console.log("API Response:", response);
                    console.log("Fetched Data:", data);

                    if (Array.isArray(data)) {
                        console.log("Current Notes State before update:", notes);
                        setNotes(data);
                        console.log("Notes have been set to:", data);
                    } else {
                        console.error('Fetched data is not an array:', data);
                    }

                } catch (error) {
                    console.error('Error fetching notes:', error);
                }
            } else {
                console.error('No userId found in localStorage');
            }
        };

        fetchNotes();
    }, [userId]);

    const deleteNote = async (noteId) => {

        const deleteThisNote = {
            noteId: parseInt(noteId, 10),
            userId: parseInt(userId, 10),
        };

        console.log('delete================================", noteId: ', deleteThisNote);

        try {
            const response = await fetch(`https://mih7zrpt8g.execute-api.us-west-1.amazonaws.com/default/notes`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(deleteThisNote),
            });

            if (response.ok) {
                console.log('Delete this note SUCCESS');
                setNotes(notes.filter(note => note.noteId !== noteId));
            } else {
                console.error('Failed to delete note:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting note:', error);
        }
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
                            {Object.keys(bibleGroups).map(group => (
                                <div key={group} className='chart-group'>
                                    <BarChartBible group={group} books={bibleGroups[group]} color={categoryColors[group]} />
                                </div>
                            ))}
                        </div>

                        <div className='duo-container'>
                            <div className='pie-chart'>
                                <PieChart />
                            </div>
                            <div className='recent-note-container'>
            
                                <NotesList userId={userId} notes={notes} deleteNote={deleteNote} />
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Home;