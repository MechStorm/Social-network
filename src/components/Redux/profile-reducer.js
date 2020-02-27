import { userAPI, profileApi } from "../../api/api";

const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const PROFILE_LOADING = "PROFILE-LOADING";
const SET_STATUS = "SET-STATUS";

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
    newPostText: "",
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: 5,
        message: state.newPostText,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQ0RVqfW3wEqPrR9qzGfBdNtMPcLvPaZxjqJYaOYVGnh5ndJE&s",
        likeCount: 0
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ''
      }
    case ADD_NEW_POST_TEXT: 
      return {
        ...state,
        newPostText: action.textPost
      }
    case PROFILE_LOADING:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
    return {
      ...state,
      status: action.status
    }
    default:
      return state;
  };
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({ type: ADD_NEW_POST_TEXT, textPost: text });
export const profileLoading = profile => ({ type: PROFILE_LOADING, profile });
export const setStatus = status => ({ type: SET_STATUS, status});

export const getProfile = userID => {
  return dispatch => {
    userAPI.getProfile(userID).then(data => {
      dispatch(profileLoading(data));
  })
  };
};

export const getProfileStatus = userID => dispatch => {
  profileApi.getProfileStatus(userID)
    .then(status => dispatch(setStatus(status)));
};

export const updateProfileStatus = status => dispatch => {
  profileApi.updateProfileStatus(status)
  .then(data =>  {
    if(data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  })
}

export default profileReducer;