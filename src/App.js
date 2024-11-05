import React, { useRef, useState } from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider, useMediaQuery } from "@mui/material";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TimelineView from './components/TimelineView';
import ProjectsView from './components/ProjectsView';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectDetailsView from './components/ProjectDetailsView';

function App() {
  const [showProjects, setShowProjects] = useState(true);
  const [activeView, setActiveView] = useState("main");
  const targetDivRef = useRef(null);

  const theme = responsiveFontSizes(createTheme());
  const isMobile = useMediaQuery('(max-width:980px)');

  const scrollToDiv = () => targetDivRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='container'>
          <Banner onDownArrowClick={scrollToDiv} isMobile={isMobile} />
          
          <div className='main'></div>

          <div className="main" ref={targetDivRef}>
            <Routes>
              <Route path='/' element={
                <div className="main-container">
                  <Navbar activeView={activeView} showProjects={showProjects} setShowProjects={setShowProjects} />

                  {showProjects ? (
                    <ProjectsView activeView={activeView} setActiveView={setActiveView} />
                  ) : (
                    <TimelineView isMobile={isMobile} />
                  )}
              </div>
              }/>
              <Route path="/hello" element={
                <ProjectDetailsView isMobile={isMobile} />
              } />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
