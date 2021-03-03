import {appTypes, cartTypes} from '../types';

const initialState = {
  hidden: true,
  cartItems: [],
  isLoading: false,
}

const addItemFromCart = (cartItems, cartItemToAdd) => {
  const existsCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if(existsCartItem){
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existsCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if(existsCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1 } : cartItem );
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