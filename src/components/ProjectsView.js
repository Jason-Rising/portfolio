import React from 'react';
import { CSSTransition } from "react-transition-group";
import profile from '../assets/images/profile.jpg';
import { Grid2 } from '@mui/material';
import Widget from './Widget';
import { useNavigate } from "react-router-dom";

const ProjectsView = ({ activeView, setActiveView }) => {
    const navigate = useNavigate(); 
    
    return (
        <CSSTransition in={activeView === 'main'} unmountOnExit timeout={300} classNames='project-view' onExited={() => {navigate('/hello'); setActiveView('main')}}>
            <div className='project-view'>
            <Grid2 container spacing={{ xs: 2, md: 3, lg: 8 }} className='fade-in-right'>
                <Grid2>
                <Widget img={profile} onClick={() => setActiveView("project-popup")} />
                </Grid2>
            </Grid2>
            </div>
        </CSSTransition>
    )
};

export default ProjectsView;
