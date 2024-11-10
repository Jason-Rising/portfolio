import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UnityLogo from '../assets/company_logos/unity.svg';
import BlenderLogo from '../assets/company_logos/blender.svg';
import SteamLogo from '../assets/company_logos/steamvr-branding.svg';
import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';
import ProjectDetailsBanner from './ProjectDetailsBanner';

import ProfilePic from '../assets/images/profile.jpg';
import Cave from '../assets/images/projects/beyond_mankind/cave1.jpg';
import Mountain from '../assets/images/projects/beyond_mankind/landscape1.jpg';
import Anxierty from '../assets/images/projects/anxiety_revelation_of_mind/anxiety_banner.jpg';
import Dragon from '../assets/images/projects/dragon_forge/swamp_2.jpg';
import TechnologyList from './TechnologyList';

const ProjectDetailsView = ({isMobile}) => {
  const [t] = useTranslation("global");
  const navigate = useNavigate(); 


  return (
    <div className="project-detail-view">
        <ProjectDetailsBanner isMobile={isMobile} title={'VR Medical Eye Simulation'}/>
        
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
                <TechnologyList items={[
                    {image: UnityLogo, text: 'Unity'},
                    {image: BlenderLogo, text: 'Blender'},
                    {image: SteamLogo, text: 'SteamVR'}
                ]}/>  
            </div>
        </div>
            <div className="gallery-container">
                <div>
                    <Typography variant={'h6'}>VIDEOS</Typography>
                    <VideoGallery videos={[
                        { src: 'https://www.youtube.com/embed/OoUvYfuNVuo?si=JEU5yojGdc54kM8M', title: 'Video 1' },
                        { src: 'https://www.youtube.com/embed/OoUvYfuNVuo?si=JEU5yojGdc54kM8M', title: 'Video 2' }
                        ]} />
                </div>
                <div>
                    <Typography variant={'h6'}>IMAGES</Typography>
                    <ImageGallery isMobile={isMobile} images={[
                        { src: ProfilePic, alt: 'Kitten 1' },
                        { src: Cave, alt: 'Kitten 1' },
                        { src: Dragon, alt: 'Kitten 1' },
                        { src: Anxierty, alt: 'Kitten 1' },
                        { src: Mountain, alt: 'Kitten 1' },
                    ]}/>
                </div>
            </div>       
        </div>
    </div>
  )};

export default ProjectDetailsView;
