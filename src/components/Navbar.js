import React from 'react';
import { Button } from "@mui/material";
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';

const Navbar = ({ activeView, showProjects, setShowProjects }) => {
  const [t] = useTranslation("projects");

  return (
    <CSSTransition
    in={activeView === 'main'}
    unmountOnExit
    timeout={300}
    classNames="navbar"
>
  <div className="navbar">
      <Button className={!showProjects ? "active" : ""} onClick={() => setShowProjects(true)}>
      {t("project.projects")}
      </Button>
      <Button className={showProjects ? "active" : ""} onClick={() => setShowProjects(false)}>
      {t("project.timeline")}
      </Button>
      <div className="underline" style={{ transform: showProjects ? "translateX(0)" : "translateX(100%)" }} />
  </div>
  </CSSTransition>
  );
};

export default Navbar;
