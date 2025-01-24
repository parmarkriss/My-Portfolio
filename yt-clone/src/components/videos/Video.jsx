import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/0bxVTq_A9Ss/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD2OfjSBXd-RfT7KV57xWI7lwPNTg"
          alt="video-thumbnail"
        />
        <span>05:43</span>
      </div>
      <div className="video__title">Create app in 5 minutes by Chintu</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m views
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZzaI3evVeum8z-v96EK2iW4WpyDHfGR0Mg&s"
          alt="channel-icon"
        />
        <span>Rainbow het jr</span>
      </div>
    </div>
  );
};

export default Video;
