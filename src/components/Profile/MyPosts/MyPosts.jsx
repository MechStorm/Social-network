import React from "react";
import st from "./MyPosts.module.css";
import { addPostCreate, updateNewPostCreate } from "../../Redux/profile-reducer";


const MyPosts = (props) => {
  let addPost = () => {
    if(props.newText.newPostText === '') {
      alert('Enter something');
      return;
    }
    
    props.dispatch(addPostCreate());
  }

  let updateNewPostText = (event) => {
    let textVal = event.target.value;
    let action = updateNewPostCreate(textVal);
    props.dispatch(action);
  }
  return (
    <div className={st.posts}>
      <h2>Posts:</h2>
      <div className={st.newPost}>
        New post
        <div className={st.post}>
          <div>
            <textarea onChange={updateNewPostText} name="text" id="01" cols="30" rows="3" placeholder="Enter your post message..."
            value={props.newText.newPostText} />
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