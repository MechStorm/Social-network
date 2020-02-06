import React from "react";
import st from "./MyPosts.module.css";

const MyPosts = (props) => {

  let addPost = () => {
    if(props.posts.newPostText === '') {
      alert('Enter something');
      return;
    }
    props.addPost();
  }

  let updateNewPostText = (event) => {
    let textVal = event.target.value;
    props.updateNewPostText(textVal);
  }
  
  return (
    <div className={st.posts}>
      <h2>Posts:</h2>
      <div className={st.newPost}>
        New post
        <div className={st.post}>
          <div>
            <textarea onChange={updateNewPostText} name="text" id="01" cols="30" rows="3" placeholder="Enter your post message..."
            value={props.posts.newPostText} />
          </div>
          <div>
            <button onClick={addPost}>Add post!</button>
          </div>
        </div>
      </div>
      { props.post }
    </div>
  );
};

export default MyPosts;