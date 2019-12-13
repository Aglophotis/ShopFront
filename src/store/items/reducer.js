import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    items: []
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.ITEM_ADD:
            return state.merge({
                needUpdate: true
            });
        case types.ITEM_DELETE:
            return state.merge({
                needUpdate: true
            });
        case types.ITEM_DECREASE:
            return state.merge({
                needUpdate: true
            });
        case types.ITEM_UPDATE:
            return state.merge({
                needUpdate: false
            });
        case types.ITEM_LOAD:
            return state.merge({
                items: action.items
            });
        default:
            return state;
    }
}

export function getItems(state) {
    return state.petItems.items;
}

export function isNeedUpdate(state) {
    return state.petItems.needUpdate;
}