import {cartTypes} from '../types';

export const toggleCartDropdown = () => (dispatch) => dispatch({type: cartTypes.TOGGLE_CART_HIDDEN});

export const addItem = (item) => (dispatch) => dispatch({type: cartTypes.ADD_ITEM, payload: item});

export const removeItem = (item) => (dispatch) => dispatch({type: cartTypes.REMOVE_ITEM, payload: item});

export const cleanItemFromCart = (item) => (dispatch) => dispatch({type: cartTypes.CLEAR_ITEM_FROM_CART, payload: item});

export const cleanCart = () => (dispatch) => dispatch({type: cartTypes.CLEAR_CART})
