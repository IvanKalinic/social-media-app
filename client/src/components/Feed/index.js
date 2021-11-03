import React from "react";
import "./index.scss";
import { Share, Post } from "../index";
import { Posts } from "../../mock/mockPosts";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
