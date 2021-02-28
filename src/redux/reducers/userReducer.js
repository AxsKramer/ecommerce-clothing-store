import {userTypes} from '../types';
import {appTypes} from '../types';

const initialState = {
  user: null,
  error: false,
  isLoading: false,
  message: ''
}

const userReducer = (state = initialState, action) => {
  
  switch(action.type){

    case appTypes.LOADING:
      return {
        ...state,
        isLoading: true
      }
    case userTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: false
      };
    case userTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        error: false,
        message: action.payload
      };
    case userTypes.USER_REGISTER_FAIL:
      return {
        ...state,
        error: true,
        message: action.payload
      };
    case userTypes.CLEAN_STATE:
      return {...initialState};

    case userTypes.USER_LOGOUT:
      return {...initialState};
    default:
      return state;
  }
} 

export default userReducer;