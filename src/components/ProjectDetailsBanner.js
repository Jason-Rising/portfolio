import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ReturnArrow } from '../assets/icons/arrow-left.svg';
import { useTranslation } from 'react-i18next';

const ProjectDetailsBanner = (props) => {
    const [t] = useTranslation("projects");
    const navigate = useNavigate(); 

    const [isLoaded, setIsLoaded] = useState(false);
    const bannerImageStyle = {
        opacity: isLoaded ? props.bannerOpacity : 0, 
        transition: 'opacity 0.1s ease-in-out', 
        transform: `translateY(${props.isMobile ? props.bannerTransform.translateYMobile : props.bannerTransform.translateY}) 
                    translateX(${props.isMobile ? props.bannerTransform.translateXMobile : '0px'})`,

    }
    const bannerImageSmallStyle = {
        backgroundImage: `url(${props.bannerImage.imgS})`,
        backgroundPosition: `${props.isMobile ? props.bannerTransform.translateXMobile : '0px'} 
                            ${props.isMobile ? props.bannerTransform.translateYMobile : props.bannerTransform.translateY}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '170%',
    }

    return (
        <div className='project-detail-banner' onClick={()=> navigate("/")}>
                {props.isMobile ? 
                <>
                <img className='project-banner-img'
                    src={props.bannerImage.imgL}
                    alt=""
                    style={bannerImageStyle}
                    onLoad={() => setIsLoaded(true)}
                />
                <div style={{padding: '50px'}}>
                    <ReturnArrow/>
                    <Typography className='banner-title' variant='h3' style={{ textTransform: 'uppercase' , fontWeight: 'bold'}}>{props.title}</Typography>
                </div>
                </>
            :
            <>
                <img className='project-banner-img'
                    src={props.bannerImage.imgL}
                    alt=""
                    style={bannerImageStyle}
                    onLoad={() => setIsLoaded(true)}
                />
                <div className='banner-return'>
                    <ReturnArrow/>
                    <Typography
                        className='banner-return-text' 
                        variant='h6'
                        style={{ textTransform: 'uppercase'}}
                    >
                        {t("project.return_to_projects")}
                    </Typography>
                </div>
                <Typography className='banner-title' variant='h3' style={{ textTransform: 'uppercase' , fontWeight: 'bold'}}>{props.title}</Typography>
                </>
        }
        </div>
    );
};

export default ProjectDetailsBanner;