import './App.css';
import React from 'react';
import { Home, About } from './views';
import { Navbar } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
