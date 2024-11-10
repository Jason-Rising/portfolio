import React from 'react';
import VideoGalleryElement from './VideoGalleryElement';

const VideoGallery = ({ videos }) => {
  return (
    <div className="video-container">
      {videos?.map((video, index) => (
        <VideoGalleryElement
          key={index}
          videoSrc={video.src}
          title={video.title}
        />
      ))}
    </div>
  );
};

export default VideoGallery;
