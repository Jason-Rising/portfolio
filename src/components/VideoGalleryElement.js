import React, { useState } from 'react';

const VideoGalleryElement = ({ videoSrc, title, onLoad='lazy' }) => {
    const [isLoaded, setIsLoaded] = useState(false); // Initial state for loading status of the video

    // Handler to update the loading state
    const handleVideoLoad = () => {
      setIsLoaded(true);
    };

    return (
        <div className="responsive-video">
            <iframe
            className={`video-fadein ${isLoaded ? 'fadeIn' : ''}`}
            src={videoSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onLoad={handleVideoLoad}
            ></iframe>
      </div>
    );
};

export default VideoGalleryElement;