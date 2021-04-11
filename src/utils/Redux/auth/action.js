import * as actionTypes from './actionTypes';

export const setUserInfo = (data) => ({
    type: actionTypes.SET_USER_INFO,
    payload: data,
});

export const logout = () => ({ type: actionTypes.RESET });
