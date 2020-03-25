import {authAPI, profileApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH = "social-network/app/SET_USER_AUTH";
const SET_USER_PROFILE = "social-network/app/SET-USER-PROFILE";

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

export const getAuth = () => async dispatch => {
      let data = await authAPI.getAuth();
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserAuth(id, login, email, true));

                let dataProfile = await profileApi.getProfile(id);
                    dispatch(setUserProfile(dataProfile));
            }
    };

export const userLogin = (login, pass, rememberMe) => async dispatch => {
    let data = await authAPI.userLogin(login, pass, rememberMe);
        if(data.resultCode === 0) {
            dispatch(getAuth());
        } else if(data.resultCode === 1){
            let message = data.messages.length > 0 ? data.messages[0] : "Some err";
            dispatch(stopSubmit("login", {_error: message}))
        } else if(data.resultCode === 10) {
            //dispatch(showCaptcha());
            console.log(data);
        }
}

export const userLogout = () => async dispatch => {
   let data = await authAPI.userLogout();
        if(data.resultCode === 0){
            dispatch(setUserAuth(null,null,null, false));
        }
}

export default authReducer;