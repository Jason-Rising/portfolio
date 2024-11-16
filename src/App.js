import React, { useEffect, useRef, useState } from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider, useMediaQuery } from "@mui/material";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TimelineView from './components/TimelineView';
import ProjectsView from './components/ProjectsView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetailsView from './components/ProjectDetailsView';
import { ProjectDetailsDTO } from './components/data/ProjectDetailsData';
import { useTranslation } from 'react-i18next';

function App() {
  const [t] = useTranslation("global");
  const [showProjects, setShowProjects] = useState(true);
  const [activeView, setActiveView] = useState("main");
  const targetDivRef = useRef(null);

  const theme = responsiveFontSizes(createTheme());
  const isMobile = useMediaQuery('(max-width:980px)');

  const scrollToDivSmooth = () => targetDivRef.current.scrollIntoView({ behavior: 'smooth' });

  const scrollToDiv = () => { if (!isVisible) targetDivRef.current.scrollIntoView(); }

  // Check is banner is visible  
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    })
    observer.observe(bannerRef.current);
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className='container'>
          <div ref={bannerRef}>
          <Banner onDownArrowClick={scrollToDivSmooth} isMobile={isMobile} />
          </div>
          <div className="main" ref={targetDivRef}>
            <Routes>
              <Route path='/' element={
                <div className="main-container">
                  <Navbar activeView={activeView} showProjects={showProjects} setShowProjects={setShowProjects} />

                  {showProjects ? (
                    <ProjectsView activeView={activeView} setActiveView={setActiveView} scrollToProjectView={scrollToDiv}/>
                  ) : (
                    <TimelineView isMobile={isMobile} />
                  )}
              </div>
              }/>
              {ProjectDetailsDTO(t).map((details) => (
              <Route path={details.route} element={
                <ProjectDetailsView isMobile={isMobile} projectDetails={details} />
              } />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
