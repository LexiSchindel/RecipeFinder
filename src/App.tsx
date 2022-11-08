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
import RecipeResults from './pages/RecipeResults';

function App() {
  return (
    <Router>
      {/* Move out to nav component */}
      <div>
        <NavBar />
        <div className={'top-page'}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/recipes" element={<RecipeResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
