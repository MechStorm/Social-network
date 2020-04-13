import {profileApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "social-network/profile/ADD-POST";
const PROFILE_LOADING = "social-network/profile/PROFILE-LOADING";
const SET_STATUS = "social-network/profile/SET-STATUS";
const DELETE_POST = "social-network/profile/DELETE-POST";
const SET_PHOTO = "social-network/profile/SET-PHOTO";

let initialState = {
    postData: [
        {
            id: 1,
            message: "Heeey, Nova!",
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCMfxamFyFeZvaJJU4qGsUz3mNh2Yf0_tWySUROv8J0EKqqri&s",
            likeCount: 12
        },
        {
            id: 2,
            message: "Hi, Li Ming",
            img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcmvysa1iETxLvV6dTNtb7KNpuRE3oF60oJOc0lSy2TwY6F7sPw&s",
            likeCount: 48
        }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.textPost,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQ0RVqfW3wEqPrR9qzGfBdNtMPcLvPaZxjqJYaOYVGnh5ndJE&s",
                likeCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case PROFILE_LOADING:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postID)
            };
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
};

export const addPost = textPost => ({type: ADD_POST, textPost});
export const profileLoading = profile => ({type: PROFILE_LOADING, profile});
export const setStatus = status => ({type: SET_STATUS, status});
export const deletePost = postID => ({type: DELETE_POST, postID});
export const setPhoto = photos => ({type: SET_PHOTO, photos});

export const getProfile = userID => async dispatch => {
    let data = await profileApi.getProfile(userID);
        dispatch(profileLoading(data));
};

export const getProfileStatus = userID => async dispatch => {
    let status = await profileApi.getProfileStatus(userID);
        dispatch(setStatus(status));
};

export const updateProfileStatus = status => async dispatch => {
    let data = await profileApi.updateProfileStatus(status);
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
};

export const setUserPhoto = photo => async dispatch => {
    let data = await profileApi.saveUserPhoto(photo);
    if (data.resultCode === 0) {
        dispatch(setPhoto(data.data.photos));
    }
};

export const saveProfile = profile => async (dispatch, getState) => {
    let userID = getState().userAuth.id;
    let data = await profileApi.saveProfile(profile);
    console.log(data);
    if(data.resultCode === 0) {
        dispatch(getProfile(userID));
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Another err";
        dispatch(stopSubmit('edit-profile', {_error: message}));
        return Promise.reject(message);
    }
}

export default profileReducer;