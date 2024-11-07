import React, { useState } from 'react';

const VideoGallery = () => {
  const [isLoaded, setIsLoaded] = useState([false, false]); // Initial state for loading status of each video

  // Handler to update the loading state for each video
  const handleVideoLoad = (index) => {
    setIsLoaded((prev) => {
      const newLoadState = [...prev];
      newLoadState[index] = true;
      return newLoadState;
    });
  };

  return (
    <div className="video-container">
      {[0, 1].map((index) => (
        <div className="responsive-video" key={index}>
          <iframe
            src="https://www.youtube.com/embed/OoUvYfuNVuo?si=JEU5yojGdc54kM8M"
            title={`YouTube video player ${index}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={`video-fadein ${isLoaded[index] ? 'fadeIn' : ''}`}
            onLoad={() => handleVideoLoad(index)}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
