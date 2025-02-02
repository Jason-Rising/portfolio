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
        opacity: isLoaded ? 1 : 0, 
        transition: 'opacity 0.5s ease-in-out', 
        transform: `translateY(${props.isMobile ? props.bannerTransform.translateYMobile : props.bannerTransform.translateY}) 
                    translateX(${props.isMobile ? props.bannerTransform.translateXMobile : '0px'})`,
        willChange: 'transform'
    };

    const loadingBlurredBannerStyle = {
        backgroundImage: `url(${props.bannerImage.imgS})`,
        backgroundSize: "max(100%, 1000px) auto",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: " ", 
        backgroundPosition: `${props.isMobile ? props.bannerTransform.translateXMobile : "0px"} 
                                ${props.isMobile ? props.bannerTransform.translateYMobile : props.bannerTransform.translateY}`,
        willChange: 'transform'
    };      

    return (
        <div className='project-detail-banner' onClick={()=> navigate("/")}>
                {props.isMobile ? 
                <>
                <div className='blur-load' style={loadingBlurredBannerStyle}>
                    <div className='image-overlay' style={{backgroundColor: `rgb(26, 32, 30, ${1 - props.bannerOpacity})`}}/>
                    <img className='project-banner-img'
                        src={props.bannerImage.imgL}
                        alt=""
                        style={bannerImageStyle}
                        onLoad={() => setIsLoaded(true)}
                    />
                
                <div style={{padding: '50px', zIndex: 10}}>
                    <ReturnArrow style={{zIndex: 10}}/>
                    <Typography className='banner-title' variant='h3' style={{ textTransform: 'uppercase' , fontWeight: 'bold'}}>{props.title}</Typography>
                </div>
                </div>
                </>
            :
            <>
                <div className='blur-load' style={loadingBlurredBannerStyle}>
                    <div className='image-overlay' style={{backgroundColor: `rgb(26, 32, 30, ${1 - props.bannerOpacity})`}}/>
                    <img className='project-banner-img'
                        src={props.bannerImage.imgL}
                        alt=""
                        style={bannerImageStyle}
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>

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