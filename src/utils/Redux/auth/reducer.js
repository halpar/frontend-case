import * as actionTypes from './actionTypes';

const initialState = {
    userInfo: null,
    loggedIn: false,
};

const setUserInfoReducer = (state, action) => ({
    ...state,
    userInfo: action.payload,
    loggedIn: true,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_INFO:
            return setUserInfoReducer(state, action);
        case actionTypes.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
