import React from "react";
import st from "./NewMessage.module.css";

class NewMessage extends React.Component{

  addMessage = () => {
    if(this.props.dialogs.newMessageText === ''){
      alert('Enter a message');
      return;
    }
    this.props.addMessage();
  };

  updateNewMessageText = (event) => {
    let textVal = event.target.value;
    this.props.updateNewMessageText(textVal);
  }

  render() {
    return (
      <div className={st.newMessages}>
        <div className={st.newMessage}>
          <textarea onChange={this.updateNewMessageText} cols="70" rows="3" placeholder="Enter your message..." value={this.props.dialogs.newMessageText} />
        </div>
        <div className={st.newMessageBtn}>
          <button onClick={this.addMessage}>Add message</button>
        </div>
      </div>
    );
  }
}

export default NewMessage;