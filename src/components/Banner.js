import React from 'react';
import { Typography } from "@mui/material";
import profile from '../assets/images/profile.jpg';
import { ReactComponent as DownArrowIcon } from '../assets/icons/down-arrow-outline.svg';
import SocialIcons from './SocialIcons';
import LocaleSelect from './LocaleSelect';
import { useTranslation } from 'react-i18next';

const Banner = ({ onDownArrowClick, isMobile }) => {
  const [t] = useTranslation("global");

  return (
    <section className="banner">
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
    </section>
  )};

export default Banner;
