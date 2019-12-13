import RegistrationService from "../../services/RegistrationService";
import {REGISTRATION_COMPLETE, SIGN_UP} from "../registration/actionTypes";
import {REGISTRATION_ERROR} from "../registration/actionTypes";
import {SET_AUTHORIZATION} from "../router/actionTypes";

export function registration(username, password) {
    return async (dispatch, getState) => {
        try {
            if (await RegistrationService.registration(username, password)) {
                dispatch({type: REGISTRATION_COMPLETE});
                dispatch({type: SET_AUTHORIZATION});
            } else {
                dispatch({type: REGISTRATION_ERROR});
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export function singUp() {
    return async (dispatch, getState) => {
        dispatch({type: SIGN_UP});
    }
}