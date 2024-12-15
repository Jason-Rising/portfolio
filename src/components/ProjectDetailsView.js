import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';
import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';
import ProjectDetailsBanner from './ProjectDetailsBanner';
import TechnologyList from './TechnologyList';

const ProjectDetailsView = ({isMobile, projectDetails}) => {
  const [t] = useTranslation("projects");

  return (
    <div className="project-detail-view">
        <ProjectDetailsBanner isMobile={isMobile} title={projectDetails.title} bannerImage={projectDetails.banner} bannerOpacity={projectDetails.bannerOpacity} bannerTransform={projectDetails.bannerTransform} translateY={projectDetails.bannerTranslateY}/>
        
        <div className='project-detail-info'>
        <div className='project-detail-info-contianer'>
            <div className='project-detail-overview'>
                <Typography 
                    variant='h5'
                    style={{ textTransform: 'uppercase' , fontWeight: 'bold'}}
                    sx={{
                        textDecoration: 'underline',
                        textDecorationThickness: '5px', 
                        textUnderlineOffset: '15px', 
                        textDecorationColor: '#000000'
                    }}
                >
                    {t("project.overview")}
                </Typography>
                <Typography variant='text' align='justify'>
                    {projectDetails.overview.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        {index !== projectDetails.overview.split('\n').length - 1 && <br />}
                    </React.Fragment>
                    ))}
                </Typography>

                <div className='project-detail-buttons'>
                    {(projectDetails.buttons ?? []).map((button) => (
                        <Button variant="outlined" size="large" href={button.href}>{button.text}</Button>
                    ))}
                </div>
            </div>
            {projectDetails.technologies ?
            <div className='project-detail-technologies'> 
            <Typography variant='h5'
                style={{ textTransform: 'uppercase' }}
                >
                    {t("project.technologies")}
                </Typography>              
                <TechnologyList items={projectDetails.technologies}/>  
            </div>
            : <></>}
        </div>
            <div className="gallery-container">
                {projectDetails.videos ? 
                <div>
                    <Typography variant={'h6'} style={{ textTransform: 'uppercase'}}>{t("project.videos")}</Typography>
                    <VideoGallery videos={projectDetails.videos} />
                </div> : <></>}
                {projectDetails.images ? 
                <div>
                    <Typography variant={'h6'} style={{ textTransform: 'uppercase' }}>{t("project.images")}</Typography>
                    <ImageGallery isMobile={isMobile} images={projectDetails.images}/>
                </div>
                : <></>}
            </div>       
        </div>
    </div>
  )};

export default ProjectDetailsView;
