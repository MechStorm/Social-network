import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavigationContainer from "./components/Navbar/NavigationContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <NavigationContainer />
        <div className="wrapper-content">
          <Route
            path="/profile"
            render={() => <ProfileContainer />} />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer />} />
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/users" render={()=><UsersContainer />} />
        </div>
      </div>
  );
};

export default App;