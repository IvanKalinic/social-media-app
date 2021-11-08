import React, { useState, useEffect } from "react";
import "./index.scss";
import { Share, Post } from "../index";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [update, setUpdate] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  useEffect(() => {
    const updatePosts = async () => {
      const res = await axios.get("/posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    if (update) {
      updatePosts();
      setUpdate(!update);
    }
  }, [update]);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        {(!username || username === user.username) && (
          <Share setUpdate={setUpdate} />
        )}
        {posts?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
