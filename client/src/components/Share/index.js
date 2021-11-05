import React, { useRef, useState } from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { useAuth } from "../../context/AuthContext";
import "./index.scss";
import axios from "axios";
import useSWR, { mutate, trigger } from "@zeit/swr";
import { fetcher } from "../../utils";

const Share = ({ setUpdate }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useAuth();
  const description = useRef();
  const [file, setFile] = useState(null);
  const { data } = useSWR(`/posts/timeline/${user._id}`, fetcher);

  console.log(data);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      mutate(`/posts/timeline/${user._id}`, [...data, newPost]);
      await axios.post("/posts", newPost);
      trigger(`/posts/timeline/${user._id}`);
      setUpdate(true);
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="share-wrapper">
        <div div className="share-top">
          <img
            className="share-profile-img"
            src={PF + (user.profilePicture || "person/noAvatar.png")}
            alt=""
          />
          <input
            placeholder={"What's on your mind " + user.username + " ?"}
            className="share-input"
            ref={description}
          />
        </div>
        <hr className="share-hr" />
        <form className="share-bottom" onSubmit={submitHandler}>
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="share-option">
              <Label htmlColor="blue" className="share-icon" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <Room htmlColor="green" className="share-icon" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
          <button className="share-button" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
