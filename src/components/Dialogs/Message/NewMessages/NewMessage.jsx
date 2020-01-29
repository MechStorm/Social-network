import React from "react";
import st from "./NewMessage.module.css";
import { updateNewMessageCreate, addMessageCreate } from "../../../Redux/dialogs-reducer";

const NewMessage = props => {

  let addMessage = () => {
    if(props.dialogs.newMessageText === ''){
      alert('Enter a message');
      return;
    }
    props.dispatch(addMessageCreate());
  };

  let updateNewMessageText = (event) => {
    let textVal = event.target.value;
    let action = updateNewMessageCreate(textVal);
    props.dispatch(action);
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
};

export default NewMessage;
