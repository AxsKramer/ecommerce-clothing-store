import {userTypes} from '../types';
import {auth, firestore, provider, storage } from '../../firebase';
import {createUserProfileDocument} from '../../firebase/utils';

export const loadingUser = () => ({
  type: userTypes.USER_FETCHING
});

export const registerFail = (errorMessage) => ({
  type: userTypes.USER_REGISTER_FAIL,
  payload: errorMessage
}); 

export const registerSuccess = () => ({
  type: userTypes.USER_REGISTER_SUCCESS
});

export const loginSuccess = (user) => ({
  type: userTypes.USER_LOGIN_SUCCESS,
  payload: user
});

export const loginFail = (errorMessage) => ({
  type: userTypes.USER_LOGIN_FAILURE,
  payload: errorMessage
});

export const logOut = () => ({type: userTypes.USER_LOGOUT})

export const uploadImageFail = (errorMessage) => ({
  type: userTypes.UPLOAD_USER_IMAGE_FAIL,
  payload: errorMessage
})

export const userConnected = (userConnection) => (dispatch) => {
  dispatch(loginSuccess(userConnection));
};
 
export const  registerUser = (name, email, password) => async (dispatch) => {
  
  dispatch(loadingUser());

  try {
    const userDB = await firestore.collection('users').doc(email).get();

    if(userDB.exists){
      dispatch(registerFail('User already exists'));
    }else{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument({user: user, displayName: name});
      dispatch(registerSuccess());
      if(localStorage.getItem('user')){
        localStorage.removeItem('user');
      }
    }
  } catch (error) {
    dispatch(registerFail(error.message));    
  }
}

export const loginNormal = (email, password) => async (dispatch) => {

  dispatch(loadingUser());

  try {
    const response = await auth.signInWithEmailAndPassword(email, password);

    const userDB = await firestore.collection('users').doc(response.user.email).get();

    if(userDB.exists){
      localStorage.setItem('user', JSON.stringify(userDB.data()));
      dispatch(loginSuccess(userDB.data()));
    }else{
      dispatch(loginFail('Wrong Email or Password'));
    }
  } catch (error) {
    dispatch(loginFail(error.message));
  }
}

export const loginUserByGoogle = () => async (dispatch) => {

  dispatch(loadingUser());

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
      localStorage.setItem('user', JSON.stringify(userDB.data()));
    }else{
      await firestore.collection('users').doc(user.email).set(user);
      dispatch(loginSuccess(user));
      localStorage.setItem('user', JSON.stringify(user));
    }
  } catch (error) {
    if(error.code === 'auth/popup-closed-by-user') return;
    dispatch(loginFail(error.message));
  }
}

export const changeImageProfile = (user, newImage) => async (dispatch) => {
  dispatch(loadingUser());
  try {
    const imageRef = await storage.ref().child(user.email).child('photoURL');
    await imageRef.put(newImage);
    const imageURL = await imageRef.getDownloadURL();

    await firestore.collection('users').doc(user.email).update({
      photoURL: imageURL
    })
    const userNew = {
      ...user,
      photoURL: imageURL
    }
    localStorage.setItem('user', JSON.stringify(userNew));
  } catch (error) {
    dispatch(uploadImageFail(error.message));
  }
}

export const logoutUser = () => (dispatch) => {
  auth.signOut();
  dispatch(logOut());
  localStorage.removeItem('user');
}

export const deleteUser = (email) => async (dispatch) => {
  await auth.signOut();
  await firestore.collection('users').doc(email).delete();
  dispatch(logOut());
  localStorage.removeItem('user');
}

export const cleanState = () => (dispatch) => dispatch(logOut());
