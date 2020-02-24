import React from 'react';
import Dialogs from "./Dialogs";
import { addMessage, updateNewMessage } from "../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class DialogsContainer extends React.Component {
  render (){
    return <Dialogs {...this.props}/>
  }
}

const mapStateToProps = state => {
  return {
    dialogs: state.dialogs,
  };
};

export default withAuthRedirect(connect(mapStateToProps, { addMessage, updateNewMessage })(DialogsContainer));