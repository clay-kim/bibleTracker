import React from 'react';

export const Profile = ({ username }) => {
    return (
        <div>
            <p id="usernameDisplay">{username}</p>
        </div>
    );
};

export default Profile;