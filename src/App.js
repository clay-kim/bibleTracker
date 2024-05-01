import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginForm from './Components/LoginForm';
import Home from './Pages/Home';
import Notes from './Pages/Notes';
import Bible from './Pages/Bible';

function App() {

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/bible" element={<Bible />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
