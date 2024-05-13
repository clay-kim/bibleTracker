import React, { useState } from "react";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {

    const [message, setMessage] = useState(""); // State variable for notification/message
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const toggleRegisterForm = () => {
        setShowRegisterForm(!showRegisterForm);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        // Make HTTP request to login endpoint
        try {
            const response = await fetch('https://mih7zrpt8g.execute-api.us-west-1.amazonaws.com/default/users?email=' + email + '&password=' + password);
            const userData = await response.json();
            // Check if user exists
            if (response.status === 200) {
                const username = userData[1];
                localStorage.setItem('username', username); // Store username in localStorage
                navigate('/Home', { state: { username } });

            } else if (response.status === 409) {
                // Authentication failed, display error message
                console.error("Authentication failed:", userData);
                setMessage("Incorrect email or password. Please try again.");

            } else {
                // Other errors
                console.error("Login failed:", userData);
                setMessage("Login failed. Please try again later.");
            }

        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred. Please try again later.");
        }
    };



    const handleRegister = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            username: username,
            password: password
        };

        try {

            // Check if email already exists in the database
            const response = await fetch('https://mih7zrpt8g.execute-api.us-west-1.amazonaws.com/default/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            // Check if user is registered successfully
            if (response.status === 200) {
                setMessage("Registered successfully");
                console.log("Registered successfully");

            } else {
                // Registration failed, display error message
                console.error("Registration failed:", userData);
                setMessage("Email is already in use. Please use a different email.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred. Please try again later.");
        }
    };


    return (
        <div className="wrapper">
            {showRegisterForm ? (
                <div className="form-box register">
                    <h1>Register</h1>
                    <div className="message">{message}</div>
                    <form onSubmit={handleRegister}>
                        <div className="input-box">
                            <input type="text" placeholder="Email" autoComplete="on" required onChange={(e) => setEmail(e.target.value)} />
                            <MdEmail className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Username" autoComplete="on" required onChange={(e) => setUsername(e.target.value)} />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" autoComplete="off" required onChange={(e) => setPassword(e.target.value)} />
                            <FaLock className="icon" />
                        </div>
                        <button type="submit" className="login-btn">Sign Up</button>
                        <div className="register-link">
                            <p>Already have an account? <a href="#" onClick={toggleRegisterForm} className="login-link">Login</a></p>
                        </div>
                    </form>
                </div>
            ) : (

                <div className="form-box login">
                    <h1>Login</h1>
                    <div className="message">{message}</div>
                    <form onSubmit={handleLogin}>
                        <div className="input-box">
                            <input type="text" placeholder="User Email" required onChange={(e) => setEmail(e.target.value)} />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" autoComplete="on" required onChange={(e) => setPassword(e.target.value)} />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            < a href="#">Forgot password?</a>
                        </div>
                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="#" onClick={toggleRegisterForm} className="register-link">Sign Up</a></p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default LoginForm;