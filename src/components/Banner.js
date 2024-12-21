import React, { useState } from 'react';
import { Typography } from "@mui/material";
import profile from '../assets/images/profile.jpg';
import { ReactComponent as DownArrowIcon } from '../assets/icons/down-arrow-outline.svg';
import SocialIcons from './SocialIcons';
import LocaleSelect from './LocaleSelect';
import { useTranslation } from 'react-i18next';
import bannerBackground from '../assets/images/bg.jpg';

const Banner = ({ onDownArrowClick, isMobile }) => {
  const [t] = useTranslation("global");
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="banner">
      <div className='banner-background'>
        <img src={bannerBackground} loading='lazy'/>
        <div className='banner-background-overlay'/>
      </div>

      <div className='banner-content'>
        <div className="banner-locale">
          <LocaleSelect />
        </div>
        <div className='banner-info'>
          <div className="line-break" />
          <img className="profile" src={profile} alt="Profile" />
          <Typography variant="h3">Jason Rising</Typography>
          <Typography sx={{ opacity: '80%' }} variant="h6">{t("home.job_title")}</Typography>
          <SocialIcons />
        </div>
        {isMobile && (
          <div className="banner-downarrow-mobile" onClick={onDownArrowClick}>
            <DownArrowIcon />
          </div>
        )}
      </div>
    </div>
  )};

export default Banner;
