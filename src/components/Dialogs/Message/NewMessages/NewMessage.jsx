import React from "react";
import st from "./NewMessage.module.css";
import NewMessageForm from "./NewMessageForm";

const NewMessage = props => {

  let sendMessage = values => {
    if(!values.newMessage) {
        alert('Enter some text');
        return;
    }
    props.addMessage(values.newMessage);
  }
  
    return (
      <div className={st.newMessages}>
        <NewMessageForm onSubmit={sendMessage} />
      </div>
    );
}
export default NewMessage;