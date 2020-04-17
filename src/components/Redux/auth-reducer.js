import {authAPI, profileApi, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH = "social-network/app/SET_USER_AUTH";
const SET_USER_PROFILE = "social-network/app/SET-USER-PROFILE";
const GET_CAPTCHA_URL = "social-network/app/GET-CAPTCHA-URL"

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    userProfile: null,
    captcha: null
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
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state;
    }
};

export let setUserAuth = (id, login, email, isAuth) => ({type: SET_USER_AUTH, data: {id, login, email, isAuth}});
export let setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export let getCaptchaUrl = captcha => ({type: GET_CAPTCHA_URL, captcha});

export const getAuth = () => async dispatch => {
        let data = await authAPI.getAuth();
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserAuth(id, login, email, true));

            let dataProfile = await profileApi.getProfile(id);
            dispatch(setUserProfile(dataProfile));
        }
    };

export const userLogin = (login, pass, rememberMe, captcha) => async dispatch => {
    let data = await authAPI.userLogin(login, pass, rememberMe, captcha);
        if(data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            if(data.resultCode === 10) {
                let data = await securityAPI.getCaptchaUrl(captcha);
                dispatch(getCaptchaUrl(data.url));
            }
            let message = data.messages.length > 0 ? data.messages[0] : "Some err";
            dispatch(stopSubmit("login", {_error: message}))
        }
}

export const userLogout = () => async dispatch => {
   let data = await authAPI.userLogout();
        if(data.resultCode === 0){
            dispatch(setUserAuth(null,null,null, false));
        }
}

export default authReducer;