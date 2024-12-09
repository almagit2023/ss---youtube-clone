import React, { useState } from 'react';
import VideoDetails from '../Videodetails/VideoDetails';

const Video = ({ videos }) => {
  const [detailVideoId, setDetailVideoId] = useState(null); // Track the selected video ID

  const displayVideoDetails = (vidId) => {
    setDetailVideoId(vidId); // Set the selected video ID
  };

  return (
    <div>
      {detailVideoId ? (
        // Show VideoDetails if a video ID is selected
        <VideoDetails detailVideoId={detailVideoId} goBack={() => setDetailVideoId(null)} />
      ) : (
        // Show video cards if no video is selected
        <div className="container">
          <div className="row">
            {videos.map((item, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    alt={item.snippet.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.snippet.title}</h5>
                    <button
                      className="btn btn-primary"
                      onClick={() => displayVideoDetails(item.id.videoId)}
                    >
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
