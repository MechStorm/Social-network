import React from "react";
import st from "./NewMessage.module.css";

const NewMessage = props => {

let addMessage = () => {
    if(props.dialogs.newMessageText === ''){
      alert('Enter a message');
      return;
    }
    props.addMessage();
  };

let updateNewMessageText = (event) => {
    let textVal = event.target.value;
    props.updateNewMessageText(textVal);
  }

    return (
      <div className={st.newMessages}>
        <div className={st.newMessage}>
          <textarea onChange={updateNewMessageText} cols="70" rows="3" placeholder="Enter your message..." value={props.dialogs.newMessageText} />
        </div>
        <div className={st.newMessageBtn}>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    );
}
export default NewMessage;