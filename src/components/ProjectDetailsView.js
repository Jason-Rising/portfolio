import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';
import ProjectDetailsBanner from './ProjectDetailsBanner';
import TechnologyList from './TechnologyList';

const ProjectDetailsView = ({isMobile, projectDetails}) => {
  const [t] = useTranslation("global");

  return (
    <div className="project-detail-view">
        <ProjectDetailsBanner isMobile={isMobile} title={projectDetails.title}/>
        
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
                    {t("project_details_main.overview")}
                </Typography>
                <Typography variant='text'>
                    {projectDetails.overview}
                </Typography>
            </div>
            <div className='project-detail-technologies'> 
            <Typography variant='h5'
                style={{ textTransform: 'uppercase' }}
                >
                    {t("project_details_main.technologies")}
                </Typography>              
                <TechnologyList items={projectDetails.technologies}/>  
            </div>
        </div>
            <div className="gallery-container">
                <div>
                    <Typography variant={'h6'}>{t("project_details_main.videos")}</Typography>
                    <VideoGallery videos={projectDetails.videos} />
                </div>
                <div>
                    <Typography variant={'h6'}>{t("project_details_main.images")}</Typography>
                    <ImageGallery isMobile={isMobile} images={projectDetails.images}/>
                </div>
            </div>       
        </div>
    </div>
  )};

export default ProjectDetailsView;
