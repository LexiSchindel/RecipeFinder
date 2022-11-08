import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      {/* Move out to nav component */}
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
