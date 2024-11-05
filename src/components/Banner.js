import React from 'react';
import { Typography } from "@mui/material";
import profile from '../assets/images/profile.jpg';
import { ReactComponent as DownArrowIcon } from '../assets/icons/down-arrow-outline.svg';
import SocialIcons from './SocialIcons';
import LocaleSelect from './LocaleSelect';

const Banner = ({ onDownArrowClick, isMobile }) => (
  <section className="banner">
    <div className="banner-locale">
      <LocaleSelect />
    </div>
    <div className="line-break" />
    <img className="profile" src={profile} alt="Profile" />
    <Typography variant="h3">Jason Rising</Typography>
    <Typography sx={{ opacity: '80%' }} variant="h6">Software Developer</Typography>
    <SocialIcons />
    {isMobile && (
      <div className="banner-downarrow-mobile" onClick={onDownArrowClick}>
        <DownArrowIcon />
      </div>
    )}
  </section>
);

export default Banner;
