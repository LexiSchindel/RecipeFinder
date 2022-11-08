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

function App() {
  return (
    <Router>
      {/* Move out to nav component */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About Me</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
