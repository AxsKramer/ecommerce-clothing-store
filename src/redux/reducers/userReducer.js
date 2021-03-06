import {userTypes} from '../types';

const initialState = {
  user: null,
  ok: false,
  isLoading: false,
  errorMessage: null
}

const userReducer = (state = initialState, action) => {
  
  switch(action.type){

    case userTypes.USER_FETCHING:
      return {
        ...state,
        isLoading: true
      }
    case userTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        user: action.payload,
      };
    case userTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case userTypes.USER_REGISTER_SUCCESS:
      return {...state, ok: true  };
    case userTypes.USER_REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        ok: false,
        errorMessage: action.payload,
      };
    case userTypes.USER_LOGOUT:
      return {...initialState};
      
    case userTypes.UPLOAD_USER_IMAGE_FAIL:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state;
  }
} 

export default userReducer;