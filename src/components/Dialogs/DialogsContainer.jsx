import Dialogs from "./Dialogs";
import { addMessageCreate, updateNewMessageCreate } from "../Redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dialogs: state.dialogs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(addMessageCreate());
    },
    updateNewMessageText: text => {
      let action = updateNewMessageCreate(text);
      dispatch(action);
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;