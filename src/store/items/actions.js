import ItemService from '../../services/ItemService';
import {ITEM_ADD, ITEM_DELETE, ITEM_LOAD, ITEM_UPDATE} from "./actionTypes";

export function getItems() {
    return async (dispatch, getState) => {
        try {
            let items = await ItemService.getAllItems();
            if (items) {
                let state = getState();
                console.log(state);
                console.log(items);
                dispatch({type: ITEM_LOAD, items});
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export function addItem(item) {
    return async (dispatch, getState) => {
        try {
            let result = await ItemService.addItem(item);
            if (result) {
                dispatch({type: ITEM_ADD});
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export function deleteItem(id) {
    return async (dispatch, getState) => {
        try {
            let result = await ItemService.deleteItem(id);
            if (result) {
                dispatch({type: ITEM_DELETE, result});
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export function decreaseItem(id) {
    return async (dispatch, getState) => {
        try {
            let result = await ItemService.decreaseItem(id);
            if (result) {
                dispatch({type: ITEM_DELETE, result});
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export function setNeedUpdate(flag) {
    return async (dispatch, getState) => {
        dispatch({type: ITEM_UPDATE, flag});
    };
}

