import React from "react";
import st from "./Post.module.css";

const Post = props => {
  return (
    <div className={st.item}>
      <img src={props.img} alt="pict" />
      {props.message}
      <div>
        <span>Like: {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
