import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    isSignUp: false
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.REGISTRATION_COMPLETE:
            return state.merge({
                isSignUp: false
            });
        case types.REGISTRATION_ERROR:
            return state.merge({
                isSignUp: true
            });
        case types.SIGN_UP:
            return state.merge({
                isSignUp: true
            });
        default:
            return state;
    }
}

export function isSignUp(state) {
    return state.registration.isSignUp;
}
