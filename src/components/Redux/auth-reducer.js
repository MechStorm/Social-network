import {authAPI, profileApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH = "SET_USER_AUTH";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    userProfile: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.data
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            }
        default:
            return state;
    }
};

export let setUserAuth = (id, login, email, isAuth) => ({type: SET_USER_AUTH, data: {id, login, email, isAuth}});
export let setUserProfile = profile => ({type: SET_USER_PROFILE, profile});

export const getAuth = () => dispatch => {
      return authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserAuth(id, login, email, true));

                profileApi.getProfile(id).then(data => {
                    dispatch(setUserProfile(data));
                });
            }
        });
    };

export const userLogin = (login, pass, rememberMe) => dispatch => {
    authAPI.userLogin(login, pass, rememberMe).then(data => {
        if(data.resultCode === 0) {
            dispatch(getAuth());
        } else if(data.resultCode === 1){
            let message = data.messages.length > 0 ? data.messages[0] : "Some err";
            dispatch(stopSubmit("login", {_error: message}))
        } else if(data.resultCode === 10) {
            //dispatch(showCaptcha());
            console.log(data);
        }
    })
}

export const userLogout = () => dispatch => {
    authAPI.userLogout().then(data => {
        if(data.resultCode === 0){
            dispatch(setUserAuth(null,null,null, false));
        }
    })
}

export default authReducer;