import './App.css';
import HomePage from './pages/Homepage';
import TopBarComponent from './components/TopBarComponent';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import WorkPage from './pages/WorkPage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <TopBarComponent/>
        <Routes>
          <Route path="/" element={<HomePage/>} /> {/*Start Page.*/}
          <Route path="/home" element={<HomePage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/work" element={<WorkPage/>} />
          <Route path="/aboutme" element={<AboutMePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<ErrorPage/>} />{/*Error Page*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
