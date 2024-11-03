import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const sidebarSuscriber = useSelector(store => store.app.isMenuOpen);
  // console.log(sidebarSuscriber);

  if(!sidebarSuscriber) return null;
  
  return (
    <div className="w-2/12 pl-4 pr-14 shadow-lg">
      <div>
        <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>History</li>
        <li>Watchlater</li>
        </ul>
      </div>
      <div className="font-bold">Subscriptions</div>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <div className="font-bold">Subscriptions</div>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
