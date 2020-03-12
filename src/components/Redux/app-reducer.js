import {getAuth} from "./auth-reducer";

const INITIALIZING = "INITIALIZING";

let initialState = {
    initializing: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING:
            return {
                ...state,
                initializing: true
            }
        default:
            return state;
    }
};

export let initializingProcess = () => ({type: INITIALIZING});

export const getInitialize = () => dispatch => {
        let promiseAuth = dispatch(getAuth());
        Promise.all([promiseAuth]).then(()=>{
            dispatch(initializingProcess());
        });
    };

export default appReducer;