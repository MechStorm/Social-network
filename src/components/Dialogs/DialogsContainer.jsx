import React from "react";
import Dialogs from "./Dialogs";
import { addMessageCreate, updateNewMessageCreate } from "../Redux/dialogs-reducer";

const DialogsContainer = props => {
    
  let addMessage = () => {
    props.store.dispatch(addMessageCreate());
  };

  let updateNewMessageText = text => {
    let action = updateNewMessageCreate(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      dialogs={props.dialogs}
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
    />
  );
};

export default DialogsContainer;
