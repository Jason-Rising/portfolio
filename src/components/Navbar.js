import React from 'react';
import { Button } from "@mui/material";
import { CSSTransition } from 'react-transition-group';

const Navbar = ({ activeView, showProjects, setShowProjects }) => (
    <CSSTransition
        in={activeView === 'main'}
        unmountOnExit
        timeout={300}
        classNames="navbar"
  >
    <div className="navbar">
        <Button className={!showProjects ? "active" : ""} onClick={() => setShowProjects(true)}>
        Projects
        </Button>
        <Button className={showProjects ? "active" : ""} onClick={() => setShowProjects(false)}>
        Timeline
        </Button>
        <div className="underline" style={{ transform: showProjects ? "translateX(0)" : "translateX(100%)" }} />
    </div>
  </CSSTransition>
);

export default Navbar;
