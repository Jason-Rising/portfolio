import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ReturnArrow } from '../assets/icons/arrow-left.svg';
import { useTranslation } from 'react-i18next';

const ProjectDetailsBanner = () => {
    const [t] = useTranslation("global");
    const navigate = useNavigate(); 

    return (
        <div className='project-detail-banner' onClick={()=> navigate("/")}>
            <div className='banner-return'>
                <ReturnArrow/>
                <Typography
                    className='banner-return-text' 
                    variant='h6'
                    style={{ textTransform: 'uppercase'}}
                >
                    Return to Projects
                </Typography>
            </div>
            <Typography className='banner-title' variant='h3' style={{ textTransform: 'uppercase' , fontWeight: 'bold'}}>VR Medical Eye Simulation</Typography>
        </div>
    );
};

export default ProjectDetailsBanner;