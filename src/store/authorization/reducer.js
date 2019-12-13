import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  authorized: false
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.AUTH_COMPLETE:
      return state.merge({
        authorized: true
      });
    case types.AUTH_ERROR:
      return state.merge({
        authorized: false
      });
    case types.SIGN_OUT:
      return state.merge({
        authorized: false
      });
    default:
      return state;
  }
}

export function isAuthorized(state) {
  return state.auth.authorized;
}
