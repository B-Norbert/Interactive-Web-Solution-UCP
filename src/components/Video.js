import React from 'react';
import './Video.css';
function Video() {
    return(
        <div className='video-c'>
            <video src='/videos/video_ho.mp4' autoPlay loop muted />
        </div>
    );
}

export default Video;