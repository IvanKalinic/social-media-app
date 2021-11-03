import React from "react";
import "./index.scss";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">Social media app</span>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <Search className="search-icon" />
          <input
            placeholder="Search for friend, post or video"
            className="search-input"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <div className="topbar-link">Homepage</div>
          <div className="topbar-link">Timeline</div>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Chat />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-badge">3</span>
          </div>
        </div>
        <img src="/assets/person/person1.jpg" alt="" className="topbar-image" />
      </div>
    </div>
  );
};

export default Topbar;
