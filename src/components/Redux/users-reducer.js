import { userAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_PAGE = "SET-PAGE";
const TOGGLE_ISFETCHING = "TOGGLE-ISFETCHING";
const TOGGLE_IS_PROCESS = "TOGGLE-IS-PROCESS";

let initialState = {
  users: [],
  pageSize: 5,
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
        users: [...state.users].map(u => {
          if (u.id === action.id) {
            return { ...u, follow: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: [...state.users].map(u => {
          if (u.id === action.id) {
            return { ...u, follow: false };
          }
          return u;
        })
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
      return{
        ...state,
        toggleIsFollowingProcess: action.isFetching ?
        [...state.toggleIsFollowingProcess, action.userID]
        : state.toggleIsFollowingProcess.filter(id => id !== action.userID)
      }
    default:
      return state;
  }
};

export const follow = userId => ({ type: FOLLOW, id: userId });
export const unfollow = userId => ({ type: UNFOLLOW, id: userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setTotalCount = totalCount => ({ type: SET_TOTAL_COUNT, totalCount });
export const setCurrentPage = currentPage => ({ type: SET_PAGE, currentPage });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_ISFETCHING, isFetching });
export const toggleIsProcess = (isFetching, userID) => ({ type: TOGGLE_IS_PROCESS, isFetching, userID });


export const getUsersTC = (pageNumber, pageSize) => {
  return dispatch => {
    dispatch(setCurrentPage(pageNumber));
      dispatch(toggleIsFetching(true));
      userAPI.getUsers(pageNumber, pageSize)
      .then(data => {
          dispatch(toggleIsFetching(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalCount(data.totalCount));
      })
  };
};

export const unfollowing = (userID) => {
  return dispatch => {
    dispatch(toggleIsProcess(true, userID));
                userAPI.unfollow(userID).then(data => {        
                  if(data.resultCode === 0 ) {
                    dispatch(unfollow(userID));
                  }
                  dispatch(toggleIsProcess(false, userID));
                  
                  userAPI.getProfile(userID).then(data => {
                    setTimeout(()=> alert('you are unfollowing on ' + data.fullName), 0)
                    })
                }) 
  };
};

export const following = (userID) => {
  return dispatch => {
    dispatch(toggleIsProcess(true, userID));
                userAPI.follow(userID).then(data => {        
                  if(data.resultCode === 0 ) {
                    dispatch(follow(userID));
                  }
                  dispatch(toggleIsProcess(false, userID));
                  
                  userAPI.getProfile(userID).then(data => {
                  setTimeout(()=> alert('you are following on ' + data.fullName), 0)
                  })
                })
  };
};

export default usersReducer;