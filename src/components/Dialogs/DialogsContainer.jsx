import React from "react";
import Dialogs from "./Dialogs";
import { addMessageCreate, updateNewMessageCreate } from "../Redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
{
  value => {
    let dialogs = value.getState().dialogs;
    let addMessage = () => {
    value.dispatch(addMessageCreate());
  };

  let updateNewMessageText = text => {
    let action = updateNewMessageCreate(text);
    value.dispatch(action);
  };

  return <Dialogs dialogs={dialogs} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
  }
}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;