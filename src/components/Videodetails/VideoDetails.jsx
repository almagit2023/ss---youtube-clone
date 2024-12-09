import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const VideoDetails = ({ detailVideoId, goBack }) => {
  const BASE_URL = 'https://youtube-v31.p.rapidapi.com/videos';
  const [video, setVideo] = useState(null);

  const fetchVideoDetails = async () => {
    const options = {
      method: 'GET',
      url: BASE_URL,
      params: { part: 'snippet,contentDetails,statistics', id: detailVideoId },
      headers: {
        'x-rapidapi-key': process.env.RAPID_API_YT_KEY,
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setVideo(response.data.items[0]); // Get the video details
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (detailVideoId) fetchVideoDetails();
  }, [detailVideoId]);

  return (
    <div className="d-flex" style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <div style={{ flex: 2, padding: '20px' }}>
        <button className="btn btn-secondary mb-3" onClick={goBack}>
          Go Back
        </button>
        <h3>{video?.snippet?.title}</h3>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${detailVideoId}`} controls width="100%" />
        <p>{video?.snippet?.description}</p>
        <textarea className="form-control my-3" rows="3" placeholder="Add a comment..."></textarea>
        <div className="d-flex">
          <button className="btn btn-primary mr-2">Like</button>
          <button className="btn btn-danger">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
