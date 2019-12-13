import * as types from "./routerConstants";
import {SET_REGISTRATION} from "./actionTypes";
import {SET_AUTHORIZATION} from "./actionTypes";
import {SET_ITEMS} from "./actionTypes";

export function setWindow(windowType) {
    return async (dispatch, getState) => {
        switch (windowType) {
            case types.REGISTRATION:
                dispatch({type: SET_REGISTRATION});
                break;
            case types.AUTHORIZATION:
                dispatch({type: SET_AUTHORIZATION});
                break;
            case types.ITEMS:
                dispatch({type: SET_ITEMS});
        }
    }
}