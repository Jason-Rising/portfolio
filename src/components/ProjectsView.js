import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import { Grid2 } from '@mui/material';
import Widget from './Widget';
import { useNavigate } from "react-router-dom";
import { ProjectDetailsDTO } from './data/ProjectDetailsData';
import { useTranslation } from 'react-i18next';

const ProjectsView = ({ activeView, setActiveView, scrollToProjectView }) => {
    const [t] = useTranslation("global");
    const navigate = useNavigate(); 
    const [projectRoute, setProjectRoute] = useState('/dev');

    return (
        <CSSTransition in={activeView === 'main'} unmountOnExit timeout={300} classNames='project-view' onExited={
                () => {
                    navigate(projectRoute); 
                    setActiveView('main'); 
                    scrollToProjectView();
                }
            }>
            <div className='project-view'>
            <Grid2 container spacing={{ xs: 2, md: 3, lg: 8 }} className='fade-in-right'>
                {ProjectDetailsDTO(t).map((details) => (
                <Grid2>
                    <Widget img={details.widgetImg} onClick={() => {setProjectRoute(details.route); setActiveView("project-popup");}} />
                </Grid2>
                ))}
            </Grid2>
            </div>
        </CSSTransition>
    )
};

export default ProjectsView;
