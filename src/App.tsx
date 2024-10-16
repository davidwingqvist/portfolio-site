import './App.css';
import HomePage from './pages/Homepage';
import TopBarComponent from './components/TopBarComponent';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import WorkPage from './pages/WorkPage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <TopBarComponent/>
        <Routes>
          <Route path="/portfolio-site" element={<HomePage/>} /> {/*Start Page.*/}
          <Route path="/home" element={<HomePage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/work" element={<WorkPage/>} />
          <Route path="/aboutme" element={<AboutMePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<HomePage/>} />{/*Error Page - Goes to homepage instead*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
