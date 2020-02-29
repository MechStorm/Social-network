import {authAPI, profileApi} from "../../api/api";

const SET_USER_AUTH = "SET_USER_AUTH";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    userProfile: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: true
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

export let setUserAuth = (id, login, email) => ({type: SET_USER_AUTH, data: {id, login, email}});
export let setUserProfile = profile => ({type: SET_USER_PROFILE, profile});


export const getAuth = () => {
    return dispatch => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUserAuth(id, login, email));

                profileApi.getProfile(id).then(data => {
                    dispatch(setUserProfile(data));
                });
            }
        });
    };
}

export const userLogin = (login, pass, rememberMe) => dispatch => {
    authAPI.userLogin(login, pass, rememberMe).then(data => {
        debugger;
            return data.data.userId = 5968;
    })
}

export default authReducer;