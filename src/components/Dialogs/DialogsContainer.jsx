import React from 'react';
import Dialogs from "./Dialogs";
import { addMessage, updateNewMessage } from "../Redux/dialogs-reducer";
import { connect } from "react-redux";

class DialogsContainer extends React.Component {
  render (){
    return <Dialogs {...this.props}/>
  }
}

const mapStateToProps = state => {
  return {
    dialogs: state.dialogs
  };
};

export default connect(mapStateToProps, { addMessage, updateNewMessage })(DialogsContainer);