import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

const Gallery = ({isMobile, images}) => { 
    return (
      <div className="gallery">
          <ImageList
          variant='masonry' 
          sx={{width: '100%'}} 
          cols={isMobile ? 1 : 3}
          gap={'1vw'}>
        {images.map((image, index) => (

          // TODO: Address lazy loading for image gallery
          <ImageListItem className="img-container" style={{backgroundImage: `url(${image.imgS})`}}>
            <a
              key={index}
              href={image.src}
              data-lightbox="my-gallery"
              data-title={image.alt}
            >
              <img src={image.src} alt={image.alt} loading='lazy' style={{opacity: 1}} />
            </a>
          </ImageListItem>
        ))}
        </ImageList>
    </div>
    );
  };
  
  export default Gallery;