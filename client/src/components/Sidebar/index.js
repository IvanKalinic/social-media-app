import React from "react";
import "./index.scss";
import { RssFeed } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className="siderbar-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
