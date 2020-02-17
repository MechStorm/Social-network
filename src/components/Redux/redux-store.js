import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    userAuth: authReducer
});

let store = createStore(reducers);

export default store;