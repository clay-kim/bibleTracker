import React, { useState } from 'react';
import './Home.css';
import TopSearchBarMenu from '../Components/TopSearchBarMenu';
import { useLocation } from 'react-router-dom';
import SideBarMenu from '../Components/SideBarMenu';
import { RxHamburgerMenu } from "react-icons/rx";

export const Home = () => {
    const location = useLocation();
    const username = location.state ? location.state.username : '';
    console.log('Here is Home:');

    const [showNav, setShowNav] = useState(true);


    return (
        <div className='dashboard'>
            <div className='userName'>{username}</div>
            <p>This is the landing page after successful login.</p>
            <RxHamburgerMenu onClick={() => setShowNav(!showNav)} className="hamburgerMenu" />
            <TopSearchBarMenu />

            <div className='homeMain'>

            <SideBarMenu show={showNav} />

            </div>
        </div>
    )
}

export default Home;