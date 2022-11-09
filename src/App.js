import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Aboutus from './components/AboutUs';
import OurClients from './components/OurClients';
import Nav from './components/Nav';
import ProjectsPage from './components/ProjectsPage';
import { useState } from "react";
import ProjectDetails from "./components/ProjectDetails"


function App() {
  const [projects, setProjects] = useState([
    {name: 'Nordig Water Regenration Project', year: 2019, budget: "100M+", id: 1},
    {name: 'Hurricane Relief', year: 2021, budget: "50M+", id: 2},
    {name: 'Disabled Animal Rescue Modernization Tech Initiatice', year: 2019, budget: "100M+", id: 3},
    {name: 'Unsereved Communities of SF Restoration Projects', year: 2019, budget: "100M+", id: 4},
  ]);


  return (
    <div className="main">
      <Nav />
      <Routes>
          <Route element={<Aboutus />} path="/about-us"/>
          <Route element={<OurClients/>} path="/our-clients"/>
          <Route element={<ProjectsPage prs={projects} />} path="projects" />
          <Route element={<ProjectDetails prs={projects} />} path="project-details/:projectID" />
      </Routes>

  
    </div>
  );
}

export default App;
