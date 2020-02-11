const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_PAGE = "SET-PAGE";

let initialState = {
  users: [ ],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1
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
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, id: userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, id: userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setTotalCountAC = totalCount => ({ type: SET_TOTAL_COUNT, totalCount });
export const setCurrentPageAC = currentPage => ({ type: SET_PAGE, currentPage });

export default usersReducer;