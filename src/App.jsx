import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
        </div>

    );
};

export default App;