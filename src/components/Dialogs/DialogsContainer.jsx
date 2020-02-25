import React from 'react';
import Dialogs from "./Dialogs";
import { addMessage, updateNewMessage } from "../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(
  connect(mapStateToProps, { addMessage, updateNewMessage }),
  withAuthRedirect
  )(DialogsContainer);