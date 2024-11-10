import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

const Gallery = ({images}) => { 
    return (
      <div className="gallery">
          <ImageList
          variant='masonry' 
          sx={{width: '100%'}} 
          cols={3}
          gap={'1vw'}>
        {images.map((image, index) => (

          <ImageListItem className="img-container">
            <a
              key={index}
              href={image.src}
              data-lightbox="my-gallery"
              data-title={image.alt}>
              <img src={image.src} alt={image.alt} loading='lazy' />
            </a>
          </ImageListItem>
        ))}
        </ImageList>
    </div>
    );
  };
  
  export default Gallery;