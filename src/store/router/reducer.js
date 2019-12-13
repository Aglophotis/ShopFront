import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import * as routerTypes from './routerConstants'

const initialState = Immutable({
    currentWindow: routerTypes.AUTHORIZATION
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SET_REGISTRATION:
            return state.merge({
                currentWindow: routerTypes.REGISTRATION
            });
        case types.SET_AUTHORIZATION:
            return state.merge({
                currentWindow: routerTypes.AUTHORIZATION
            });
        case types.SET_ITEMS:
            return state.merge({
                currentWindow: routerTypes.ITEMS
            });
        default:
            return state;
    }
}

export function getCurrentWindow(state) {
    return state.rout.currentWindow;
}
