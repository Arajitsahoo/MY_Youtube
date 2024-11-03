import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import ChartSection from "./ChartSection";

const Watch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  const [params] = useSearchParams();
  // console.log(params.get("v"))
  return (
    <div >
      <div className="flex m-6">
        <iframe
          width="1200"
          height="615"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
       
        <ChartSection />
        
      </div>
      <div>
        <CommentSection />
      </div>
    </div>
  );
};

export default Watch;
