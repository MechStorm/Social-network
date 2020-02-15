import React from 'react';
import { connect } from "react-redux";
import Navigation from "./Navigation";

class NavigationContainer extends React.Component{
  render() {
    return <Navigation sidebar={this.props.sidebar} />
  }
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
};

export default connect(mapStateToProps)(NavigationContainer);