import * as actionTypes from './actionTypes';

const initialState = {
    languageInfo: 'en',
};

const setLanguageInfoReducer = (state, action) => ({
    ...state,
    languageInfo: action.payload,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LANGUAGE:
            return setLanguageInfoReducer(state, action);
        case actionTypes.RESET:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
