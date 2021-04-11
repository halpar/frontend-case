import * as actionTypes from './actionTypes';

export const setLanguage = (data) => ({
    type: actionTypes.SET_LANGUAGE,
    payload: data,
});

export const logout = () => ({ type: actionTypes.RESET });
