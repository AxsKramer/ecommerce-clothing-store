import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
});

export default rootReducer;
