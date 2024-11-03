import React from "react";

const VideoCards = ({ info }) => {
    // console.log(info)
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { url } = thumbnails?.high;
  return (
    <div className="m-2">
      <img src={url} alt="" className="rounded-md h-60 w-96"/>
      <div className="w-96">
        <ul>
            <li className="font-bold my-1">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views </li>
        </ul>
      </div>
    </div>
  );
};

export const AddVideoCards = ({info})=>{
    return (
      <div className=" border border-red-700">
        <VideoCards info={info}/>
      </div>
    )
  
}

export default VideoCards;
