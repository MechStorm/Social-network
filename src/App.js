import React, {lazy, Suspense} from "react";
import "./App.css";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import NavigationContainer from "./components/Navbar/NavigationContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {getInitialize} from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import store from "./components/Redux/redux-store";

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = lazy(() => import('./components/News/News'));
const Music = lazy(() => import('./components/Music/Music'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = lazy(() => import('./components/Login/LoginPage'));

class App extends React.Component {

    catchingErrorMessage(e){
        alert(e.reason.message);
    }

    componentDidMount() {
        this.props.getInitialize();
        window.addEventListener("unhandledrejection", this.catchingErrorMessage);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchingErrorMessage);
    }

    render() {
        if (!this.props.initializing) return <Preloader/>
        return (
            <div className="wrapper">
                <NavigationContainer/>
                <HeaderContainer/>
                <div className="wrapper-content">
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Redirect exact from="/" to="/news"/>
                            <Route path="/profile/:userID?">
                                <ProfileContainer/>
                            </Route>
                            <Route path="/dialogs">
                                <DialogsContainer/>
                            </Route>
                            <Route path="/news">
                                <News/>
                            </Route>
                            <Route path="/music/genre">
                                <div>Genre</div>
                            </Route>
                            <Route path="/music">
                                <Music/>
                            </Route>
                            <Route path="/settings">
                                <Settings/>
                            </Route>
                            <Route path="/users">
                                <UsersContainer/>
                            </Route>
                            <Route path="/login">
                                <LoginPage/>
                            </Route>
                        </Switch>
                    </Suspense>
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

let AppContainer = compose(withRouter, connect(mapStateToProps, {getInitialize}))(App);

const SocialNetworkApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    );
};

export default SocialNetworkApp;