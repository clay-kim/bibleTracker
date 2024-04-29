import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginForm from './Components/LoginForm';
import Home from './Pages/Home';

function App() {

  return (
    <div className="container">
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
