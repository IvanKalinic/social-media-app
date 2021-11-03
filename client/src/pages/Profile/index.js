import React from "react";
import { Topbar, Sidebar, Feed, Rightbar } from "../../components";
import "./index.scss";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                className="profile-cover-img"
                src="assets/post/person3.jpg"
                alt=""
              />
              <img
                className="profile-user-img"
                src="assets/person/person7.jpg"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Ivan Kalinić</h4>
              <span className="profile-info-desc">Hello my friends!</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
