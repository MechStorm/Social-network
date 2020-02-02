import { connect } from "react-redux";
import Navigation from "./Navigation";

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
};

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;