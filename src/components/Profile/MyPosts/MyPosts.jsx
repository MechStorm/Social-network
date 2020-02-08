import React from "react";
import st from "./MyPosts.module.css";

class MyPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  addPost = () => {
    if(this.props.posts.newPostText === '') {
      alert('Enter something');
      return;
    }
    this.props.addPost();
  }

  updateNewPostText = (event) => {
    let textVal = event.target.value;
    this.props.updateNewPostText(textVal);
  }

  render(){
    return (
      <div className={st.posts}>
      <h2>Posts:</h2>
      <div className={st.newPost}>
        New post
        <div className={st.post}>
          <div>
            <textarea onChange={this.updateNewPostText} name="text" id="01" cols="30" rows="3" placeholder="Enter your post message..."
            value={this.props.posts.newPostText} />
          </div>
          <div>
            <button onClick={this.addPost}>Add post!</button>
          </div>
        </div>
      </div>
      { this.props.post }
    </div>
    );
  }
}

export default MyPosts;