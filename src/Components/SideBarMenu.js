import React from 'react';
import './SideBarMenu.css';


export const SideBarMenu = ({show}) => {
    return (
        <div className= {show ? 'SideBarContainer active' : 'SideBarContainer'}>
        
            <ul>
                <li>
                    <a href='/dashboard'>Dashboard</a>
                </li>
                <li>
                    <a href='/bible'>Bible</a>
                </li>
                <li>
                    <a href='/notes'>Notes</a>
                </li>

            
            </ul>
          
        </div>
    );
};

export default SideBarMenu;