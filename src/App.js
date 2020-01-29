import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navbar/Navigation";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = props => {
  return (
      <div className="wrapper">
        <Header />
        <Navigation navList={ props.state.sidebar }/>
        <div className="wrapper-content">
          <Route
            exact path="/profile"
            render={() => <Profile posts={props.state.posts} 
            store={props.store}
            />} />
          <Route
            exact path="/dialogs"
            render={() => <DialogsContainer dialogs={props.state.dialogs} 
            store={props.store}
          />} />
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </div>
  );
};

export default App;
