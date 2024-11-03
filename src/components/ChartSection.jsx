import React, { useEffect, useState } from "react";
import ChartMessage from "./ChartMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const ChartSection = () => {
  const [liveComments, setLiveComments] = useState("");
  const dispatch = useDispatch();
  const LiveChat = useSelector((store) => store.chat.chatMessage);
  useEffect(() => {
    //LiveChat APi call
    const i = setInterval(() => {
      //   console.log("hello");
      dispatch(
        addMessage({
          name: "Arajit",
          message: "something",
        })
      );
    }, 10000);
    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="border border-black mx-2 p-3 w-96 h-615 rounded-lg bg-slate-100">
        <div className="flex justify-between mb-2  items-center shadow-xl border border-b-gray-600 p-4">
          <div className="font-bold">Top 🔽</div>
          <div className="font-bold">:</div>
        </div>
        <div className="h-[550px] overflow-y-scroll flex flex-col-reverse">
          {LiveChat.map((c, i) => (
            <ChartMessage key={i} name={c.name} message={c.message + i} />
          ))}
        </div>
      </div>
      <form className="border border-black mt-2 ml-2 w-96 p-3" onSubmit={(e)=>{
        e.preventDefault();
        // console.log(liveComments);
        dispatch(addMessage({
          name: "Kulu",
          message: liveComments
        }));
        setLiveComments("");
        
      }}>
        <input
          type="text"
          className="border border-gray-600 p-2 w-72"
          placeholder="Comments"
          value={liveComments}
          onChange={(e) => setLiveComments(e.target.value)}
        />
        <button className="shadow-lg bg-green-100 p-2 ml-2 px-3" type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChartSection;
