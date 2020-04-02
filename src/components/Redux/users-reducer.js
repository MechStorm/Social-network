import {profileApi, userAPI} from "../../api/api";
import {followingUnfollowing} from "../utils/objectHelper";

const FOLLOW = "social-network/users/FOLLOW";
const UNFOLLOW = "social-network/users/UNFOLLOW";
const SET_USERS = "social-network/users/SET-USERS";
const SET_TOTAL_COUNT = "social-network/users/SET-TOTAL-COUNT";
const SET_PAGE = "social-network/users/SET-PAGE";
const TOGGLE_ISFETCHING = "social-network/users/TOGGLE-ISFETCHING";
const TOGGLE_IS_PROCESS = "social-network/users/TOGGLE-IS-PROCESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    toggleIsFollowingProcess: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: followingUnfollowing(state.users, "id", action.userId, {followed:true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: followingUnfollowing(state.users, "id", action.userId, {followed:false})
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOGGLE_ISFETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_PROCESS:
            return {
                ...state,
                toggleIsFollowingProcess: action.isFetching ?
                    [...state.toggleIsFollowingProcess, action.userID]
                    : state.toggleIsFollowingProcess.filter(id => id !== action.userID)
            };
        default:
            return state;
    }
};

export const follow = userId => ({type: FOLLOW, userId});
export const unfollow = userId => ({type: UNFOLLOW, userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setTotalCount = totalCount => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = currentPage => ({type: SET_PAGE, currentPage});
export const toggleIsFetching = isFetching => ({type: TOGGLE_ISFETCHING, isFetching});
export const toggleIsProcess = (isFetching, userID) => ({type: TOGGLE_IS_PROCESS, isFetching, userID});


export const getUsersTC = (page, pageSize) => async dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await userAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userID, apiMethod, op, message) => {
    dispatch(toggleIsProcess(true, userID));
    let data = await apiMethod(userID);
    if (data.resultCode === 0) {
        dispatch(op(userID));
    }
    dispatch(toggleIsProcess(false, userID));
    let profileData = await profileApi.getProfile(userID);
    setTimeout(() => alert(`you are ${message} on ${profileData.fullName}`), 0);
};

export const unfollowing = (userID) => async dispatch => {
    followUnfollowFlow(dispatch, userID, userAPI.unfollow.bind(userAPI), unfollow, 'unfollowing');
};

export const following = (userID) => async dispatch => {
    followUnfollowFlow(dispatch, userID, userAPI.follow.bind(userAPI), follow, 'following');
};

export default usersReducer;