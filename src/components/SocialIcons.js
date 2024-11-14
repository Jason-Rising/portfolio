import React from 'react';
import youtube from '../assets/icons/youtube.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import { ReactComponent as DownArrowIcon } from '../assets/icons/down-arrow-outline.svg';

const SocialIcons = (props) => (
  <div className="icons">
    <a href="https://www.youtube.com/channel/UCGpHnJ3Er16l4urR01OXAkg">
      <img src={youtube} alt="YouTube" />
    </a>
    <a href="https://www.instagram.com/sketch343/">
      <img src={instagram} alt="Instagram" />
    </a>
    <a href="https://github.com/Jason-Rising">
      <img src={github} alt="GitHub" />
    </a>
    {props.isMobile && (
        <div className="banner-downarrow-mobile" onClick={props.onDownClick}>
          <DownArrowIcon />
        </div>
      )}
  </div>
);

export default SocialIcons;
