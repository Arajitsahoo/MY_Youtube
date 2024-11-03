import React, { useEffect, useState } from "react";
import humbergerIcon from "../../public/humberger.svg";
import UIcon from "../../public/youtubeIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { sidebarhandeler } from "../utils/appSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { cachesResults } from "../utils/cacheSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestinos] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const SearchCaches = useSelector((store) => store.cache);

  const handleSideBAr = () => {
    dispatch(sidebarhandeler());
  };
  useEffect(() => {
    const SuggestionAPI = async () => {
      const res = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
      const json = await res.json();
      // console.log(json[1]);
      setSuggestinos(json[1]);
      dispatch(cachesResults({ [searchQuery]: json[1] }));
    };
    const Timer = setTimeout(() => {
      if (SearchCaches[searchQuery]) {
        setSuggestinos(SearchCaches[searchQuery]);
      } else {
        SuggestionAPI();
      }
    }, 200);
    return () => {
      clearTimeout(Timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-4 mx-2 shadow-lg fixed z-1000 w-full bg-white">
      <div className="flex col-span-1 gap-4 cursor-pointer">
        <img src={humbergerIcon} alt="" onClick={handleSideBAr} />
        <img src={UIcon} alt="" />
      </div>
      <div className="col-span-10 px-10 flex flex-col justify-center">
        <div>
          <input
            type="text"
            className="border border-gray-400 p-2 rounded-l-full w-1/2"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 bg-gray-400 p-2 pl-4 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed top-16 bg-white w-2/5 mt-4 rounded-xl">
            <ul className="font-bold ">
              {suggestions.map((s, index) => (
                <li
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  key={index}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img src="Profile.svg" alt="" w-16 h-16 />
      </div>
    </div>
  );
};

export default Header;
