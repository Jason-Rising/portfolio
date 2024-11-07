import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';
import { ReactComponent as ReturnArrow } from '../assets/icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import UnityLogo from '../assets/company_logos/unity.svg';
import BlenderLogo from '../assets/company_logos/blender.svg';
import SteamLogo from '../assets/company_logos/steamvr-branding.svg';
import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';

const ProjectDetailsView = ({isMobile}) => {
  const [t] = useTranslation("global");
  const navigate = useNavigate(); 


  return (
    <div className="project-detail-view">
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

        <div className='project-detail-info'>
        <div className='project-detail-info-contianer'>
            <div className='project-detail-overview'>
                <Typography variant='h5'
                style={{ textTransform: 'uppercase' , fontWeight: 'bold'}}
                sx={{
                    textDecoration: 'underline',
                    textDecorationThickness: '5px', 
                    textUnderlineOffset: '15px', 
                    textDecorationColor: '#000000', 
                  }}
                >
                    Overview
                </Typography>
                <Typography variant='text'>Prototype application that simulates different eye conditions in VR. This application was apart of a freelance project in which I worked alongside an eye surgeon who wanted to prototype the use of VR to demonstrate different eye conditions. The project consists of a management section in which custom lens effects can be created. Different lenses can be loaded in the experience section in which a lens preset(s) and an environment are selected to view in VR. The different lenses can be toggled in VR to see the different effects. The project was completed in approximately four months
                </Typography>
            </div>
            <div className='project-detail-technologies'> 
            <Typography variant='h5'
                style={{ textTransform: 'uppercase' }}
                >
                    Technologies
                </Typography>                
                <ul className="image-list">
                    <li>
                        <img src={UnityLogo} className="list-icon"/>
                        <Typography variant='text' className="list-text">Unity</Typography>
                    </li>
                    <li>
                        <img src={BlenderLogo} className="list-icon"/>
                        <Typography variant='text' className="list-text">Blender</Typography>
                    </li>
                    <li>
                        <img src={SteamLogo} className="list-icon"/>
                        <Typography variant='text' className="list-text">SteamVR</Typography>
                    </li>
                </ul>
            </div>
        </div>
            <div class="image-gallery">
                <div>
                    <Typography variant={'h6'}>VIDEOS</Typography>
                    <VideoGallery/>
                </div>
                <div>
                    <Typography variant={'h6'}>IMAGES</Typography>
                    <ImageGallery/>
                </div>
            </div>       
        </div>
    </div>
  )};

export default ProjectDetailsView;
