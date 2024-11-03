import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCards from "./Videos";
import { AddVideoCards } from "./Videos";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const FetchVideos = async () => {
      const res = await fetch(YOUTUBE_VIDEO_API);
      const json = await res.json();
      setVideo(json.items);
      // console.log(json.items[0]);
      
    };
    FetchVideos();
  }, []);
  return (
    <div className="flex m-2 flex-wrap">
      {video[0] && <AddVideoCards info={video[0]} />}
      {video.map((video) => (
        <Link to={"/Watch?v=" + video.id} key={video.id}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
