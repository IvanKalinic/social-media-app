import React, { useState, useEffect } from "react";
import { Topbar, Sidebar, Feed, Rightbar } from "../../components";
import { useParams } from "react-router";
import "./index.scss";
import axios from "axios";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div className="profile-parent-container">
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                className="profile-cover-img"
                src={PF + (user.coverPicture || "person/noCover.png")}
                alt=""
              />
              <img
                className="profile-user-img"
                src={PF + (user.profilePicture || "person/noAvatar.png")}
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">{user.username}</h4>
              <span className="profile-info-description">
                {user.description}
              </span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
