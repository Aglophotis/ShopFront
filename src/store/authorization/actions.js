import AuthorizationService from '../../services/AuthorizationService';
import {AUTH_COMPLETE, SIGN_OUT} from "./actionTypes";
import {AUTH_ERROR} from "./actionTypes";
import {SET_ITEMS} from "../router/actionTypes";

export function authorize(password, username) {
    return async (dispatch, getState) => {
        try {
            if (await AuthorizationService.authorization(username, password)) {
                dispatch({type: AUTH_COMPLETE});
                dispatch({type: SET_ITEMS});
            } else {
                dispatch({type: AUTH_ERROR});
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export function signOut() {

    return async (dispatch, getState) => {
        dispatch({type: SIGN_OUT});
    }
}