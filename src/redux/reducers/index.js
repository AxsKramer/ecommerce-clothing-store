import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";
import shopReducer from  './shopReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  shop: shopReducer
});

export default rootReducer;
