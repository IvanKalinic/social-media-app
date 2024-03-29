import React, { useState, useEffect } from "react";
import { MoreVert } from "@material-ui/icons";
import { useAuth } from "../../context/AuthContext";
import "./index.scss";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import useSWR, { mutate, trigger } from "@zeit/swr";
import { fetcher } from "../../utils";

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState([]);
  const { user: currentUser } = useAuth();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { data } = useSWR("/posts/" + post._id, fetcher);

  const likeHandler = () => {
    try {
      mutate(
        "/posts/" + post.id,
        { ...data.likes.push(currentUser._id) },
        false
      );
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
      trigger("/posts/" + post.id);
    } catch (err) {}
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <Link to={`/profile/${user.username}`}>
              <img
                className="post-profile-img"
                src={PF + (user.profilePicture || "person/noAvatar.png")}
                alt=""
              />
            </Link>
            <span className="post-username">{user.username}</span>
            <span className="post-date">{format(post.createdAt)}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.description}</span>
          <img className="post-img" src={PF + post.img} alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img
              className="like-icon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="like-icon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="post-like-counter">
              {data?.likes?.length || 0} people like it
            </span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
