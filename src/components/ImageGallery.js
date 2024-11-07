import React from 'react';
import { ReactComponent as GitHubLogo } from '../assets/company_logos/steamvr-branding.svg';
import UnityLogo from '../assets/images/profile.jpg';

const Gallery = () => {
    const images = [
      { src: {GitHubLogo}, alt: 'Kitten 1' },
      { src: {GitHubLogo}, alt: 'Kitten 1' },
      { src: {GitHubLogo}, alt: 'Kitten 1' },

      { src: {GitHubLogo}, alt: 'Kitten 1' },

    ];
  
    return (
      <div className="gallery">
        {images.map((image, index) => (
          <a
            key={index}
            href={UnityLogo}
            data-lightbox="my-gallery"
            data-title={image.alt}
          >
            <div className="img-container">
              <img src={UnityLogo} alt={image.alt} />
            </div>
          </a>
        ))}

    </div>
    );
  };
  
  export default Gallery;