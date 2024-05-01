import React, { useState } from "react";
import './TopSearchBarMenu.css';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const TopSearchBarMenu = () => {
    const [selectedBook, setSelectedBook] = useState('');
    const [selectedChapter, setSelectedChapter] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate(); // Hook for navigation


    const handleLogout = () => {
        // Implement logout functionality here
        console.log('Logout clicked');
        navigate('/');

    }

    const handleSearch = () => {
        // Implement search functionality here based on selectedBook and selectedChapter
        console.log('Selected book:', selectedBook);
        console.log('Selected chapter:', selectedChapter);
    };

    return (
        <div className="TopParWrapper">
            <div className="LeftTitle">
                <div className="Profile">
                    <FaUserCircle className="icon" />
                </div>
                <p>User Name</p>
            </div>

            <div className="SearchBar">

                <p>Search Bible</p>

                <div className="SearchBox">
                    <div className="Dropdown">
                        <select
                            value={selectedBook}
                            onChange={(e) => setSelectedBook(e.target.value)}
                        >
                            <option value="">Book</option>
                            <option value="창세기">창세기</option>
                            <option value="출애굽기">출애굽기</option>
                            <option>레위기</option>
                            <option>레위기</option>
                            <option>레위기</option>
                            <option>레위기</option>
                            {/* Add more book options here /OR/ fetch from bible API */}
                        </select>
                    </div>

                    <div className="Dropdown">
                        <select
                            value={selectedChapter}
                            onChange={(e) => setSelectedChapter(e.target.value)}
                        >
                            <option value="">Chapter</option>
                            <option value="1">Chapter 1</option>
                            <option value="2">Chapter 2</option>
                            <option value="1">Chapter 1</option>
                            <option value="2">Chapter 2</option>
                            <option value="1">Chapter 1</option>
                            <option value="2">Chapter 2</option>
                            <option value="1">Chapter 1</option>
                            <option value="2">Chapter 2</option>

                            {/* Add more chapter options here */}
                        </select>
                    </div>
                    <button onClick={handleSearch} className="SearchButton">Search</button>
                </div>
            </div>

            <div className="Logout">
                <p onClick={handleLogout}>Logout</p>
            </div>

        </div>
    )

};

export default TopSearchBarMenu;