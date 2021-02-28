import {userTypes, appTypes} from '../types';
import {auth, firestore, provider, createUserProfileDocument } from '../../firebase';

export const  registerUser = (email, password, name) => async (dispatch) => {
  
  try {
    const userDB = firestore.collection('users').doc(email).get();
    if(userDB.exists){
      dispatch({type: userTypes.USER_REGISTER_FAIL, payload: 'User already exists'});
    }else{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName: name});
      dispatch({type: userTypes.USER_REGISTER_SUCCESS, payload: `HI ${name} Time to login `})
    }
  } catch (error) {
    dispatch({type: userTypes.USER_REGISTER_FAIL, payload: error.message});    
  }
}

export const loginNormal = (email, password) => async (dispatch) => {

  dispatch({type: appTypes.LOADING});

  try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      const user = {
        uid: response.user.uid,
        email: response.user.email,
        displayName: response.user.displayName,
      }

      const userDB = await firestore.collection('users').doc(user.email).get();

    if(userDB.exists){
      dispatch({
        type: userTypes.USER_LOGIN_SUCCESS,
        payload: userDB.data()
      });
      localStorage.setItem('user', JSON.stringify(userDB.data()));
    }else{
      dispatch({type: userTypes.USER_LOGIN_FAIL, payload: 'Wrong Email or Password'});
    }
  } catch (error) {
    dispatch({type: userTypes.USER_LOGIN_FAIL, payload: error.message});
  }
}

export const loginUserByGoogle = () => async (dispatch) => {

  dispatch({type: appTypes.LOADING });

  try {
    const response = await auth.signInWithPopup(provider);

    const user = {
      uid: response.user.uid,
      email: response.user.email,
      displayName: response.user.displayName,
      photoURL: response.user.photoURL
    }

    const userDB = await firestore.collection('users').doc(user.email).get();

    if(userDB.exists){
      dispatch({
        type: userTypes.USER_LOGIN_SUCCESS,
        payload: userDB.data()
      });

      localStorage.setItem('user', JSON.stringify(userDB.data()));
    
    }else{
      await firestore.collection('users').doc(user.email).set(user);
      dispatch({
        type: userTypes.USER_LOGIN_SUCCESS,
        payload: user
      });
      localStorage.setItem('user', JSON.stringify(user));
    }


  } catch (error) {
    if(error.code === 'auth/popup-closed-by-user') return;
    dispatch({
      type: userTypes.USER_LOGIN_FAIL,
      payload: error.message
    })
  }
}

export const logoutUser = () => (dispatch) => {
  auth.signOut();
  dispatch({type: userTypes.USER_LOGOUT});
  localStorage.removeItem('user');
}

export const cleanState = () => (dispatch) => {
  dispatch({type: userTypes.CLEAN_STATE});
}