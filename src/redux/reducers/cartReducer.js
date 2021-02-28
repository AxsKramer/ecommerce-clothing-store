import {appTypes, cartTypes} from '../types';

const initialState = {
  hidden: true,
  cartItems: [],
  isLoading: false
}

const cartReducer = (state= initialState, action) => {

  switch(action.type){

    case appTypes.LOADING:
      return {
        ...state,
        isLoading: true
      }

    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: []
      };
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: []
      };
    case cartTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: []
      }
    case cartTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state;
  }
}

export default cartReducer;