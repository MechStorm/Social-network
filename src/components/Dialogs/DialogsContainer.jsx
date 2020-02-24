import React from 'react';
import Dialogs from "./Dialogs";
import { addMessage, updateNewMessage } from "../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class DialogsContainer extends React.Component {
  
  render (){
    if(!this.props.isAuth) return <Redirect to='/login' />
    return <Dialogs {...this.props}/>
  }
}

const mapStateToProps = state => {
  return {
    dialogs: state.dialogs,
    isAuth: state.userAuth.isAuth
  };
};

export default connect(mapStateToProps, { addMessage, updateNewMessage })(DialogsContainer);