import React from "react";
import { Topbar, Sidebar, Feed, Rightbar } from "../../components";
import "./index.scss";

const Home = () => {
  return (
    <div className="parent-container">
      <Topbar />
      <div className="home-container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
