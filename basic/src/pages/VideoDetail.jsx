import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const { videoId } = useParams();
  console.log(videoId);
  return <div>VidoeDetail {videoId}</div>;
};

export default VideoDetail;
