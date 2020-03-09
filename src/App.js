import React from "react";
import "./App.css";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavigationContainer from "./components/Navbar/NavigationContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/LoginPage";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {getInitialize} from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.getInitialize();
    }

    render() {
        if (!this.props.initializing) return <Preloader/>
        return (
            <div className="wrapper">
                <NavigationContainer/>
                <HeaderContainer/>
                <div className="wrapper-content">
                    <Route
                        path="/profile/:userID?"
                        render={() => <ProfileContainer/>}/>
                    <Route
                        path="/dialogs"
                        render={() => <DialogsContainer/>}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/music" component={Music}/>
                    <Route exact path="/settings" component={Settings}/>
                    <Route exact path="/users" render={() => <UsersContainer/>}/>
                    <Route exact path="/login" render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        initializing: state.app.initializing
    }
};

export default compose(withRouter, connect(mapStateToProps, {getInitialize}))(App);