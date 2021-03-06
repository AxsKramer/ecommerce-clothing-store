import {cartTypes} from '../types';
import {addItemFromCart, removeItemFromCart} from '../utils';

const initialState = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state= initialState, action) => {

  switch(action.type){

    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemFromCart(state.cartItems, action.payload)
      };
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case cartTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    case cartTypes.CLEAR_CART:
      return {...initialState}
    default:
      return state;
  }
}

export default cartReducer;