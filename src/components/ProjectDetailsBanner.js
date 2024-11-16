import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ReturnArrow } from '../assets/icons/arrow-left.svg';
import { useTranslation } from 'react-i18next';

const ProjectDetailsBanner = (props) => {
    const [t] = useTranslation("global");
    const navigate = useNavigate(); 

    return (
<div className='project-detail-banner' onClick={()=> navigate("/")}>
        {props.isMobile ? 
                <div style={{padding: '50px'}}>
                    <ReturnArrow/>
                    <Typography className='banner-title' variant='h3' style={{ textTransform: 'uppercase' , fontWeight: 'bold'}}>{props.title}</Typography>
                </div>
            :
            <>
                <div className='banner-return'>
                    <ReturnArrow/>
                    <Typography
                        className='banner-return-text' 
                        variant='h6'
                        style={{ textTransform: 'uppercase'}}
                    >
                        {t("project_details_main.return_to_projects")}
                    </Typography>
                </div>
                <Typography className='banner-title' variant='h3' style={{ textTransform: 'uppercase' , fontWeight: 'bold'}}>{props.title}</Typography>
                </>
        }
        </div>
    );
};

export default ProjectDetailsBanner;