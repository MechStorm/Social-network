import React from "react";
import st from "./Post.module.css";

const Post = ({message, likeCount, img}) => {
  return (
    <div className={st.item}>
      <img src={img} alt="pict" />
      {message}
      <div>
        <span>Like: {likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
