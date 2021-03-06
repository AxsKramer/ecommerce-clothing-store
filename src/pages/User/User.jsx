import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

import CartItem from '../../components/CartItem/CartItem';
import CustomButton from '../../components/CustomButton/CustomButton';
import Spinner from '../../components/Spinner/Spinner';
import userImage from '../../assets/img/user.png';

import {deleteUser, changeImageProfile} from '../../redux/actions/userActions';
import {cleanCart} from '../../redux/actions/cartActions';

import './User.scss';

const User = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.user);
  const {cartItems} = useSelector((store) => store.cart);
  const [deleteAccount, setDeleteAccount] = useState(false)
  const [changeImage, setChangeImage] = useState(false)
  const [file, setfile] = useState(null);

  const deleteAcc = (email) => {
    setDeleteAccount(true); 
    setTimeout(() => {
      dispatch(deleteUser(email));
      history.push('/');
    },3000);
  }

  const handleFile = (e) => {
    const image = e.target.files[0];
    if(image === undefined) return;
    if(image.type === "image/png" || image.type === "image/jpg" || image.type === "image/jpeg"){
      setfile(e.target.files[0]);
    }else{
      return;
    }
  }

  const saveImage = () => {
    if(file){
      dispatch(changeImageProfile(user, file));
    }
    setChangeImage(false);
  }

  return (
    <section className='user-page'>
      <div className='user-details'>
        <figure className='user-image'>
          <img src={user.photoURL ? user.photoURL : userImage } alt="user-image" title={user.displayName}/>
        </figure>
        <div className='user-info'>
          <h3>{user.displayName.toUpperCase()}</h3>
          <span>{user.email}</span>
        </div>
      </div>
      <Link to='/checkout'>Go to checkout page.</Link>
      <h3>Products in your cart</h3>
      <div className='user-cart'>
      {
        cartItems.length !== 0
          ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
          : <span className="empty-message">Your cart is empty</span>
      }
      </div>
      <div className='delete-container'>
        {
          deleteAccount ? (
            <>
              <p>Wait, Deleting account ...</p>
              <Spinner />
            </>
          ) : null
        }
        {
          changeImage ? (
            <div className='change-image-container'>
              <input type="file" onChange={e => handleFile(e)}/>
              {!file ? <span style={{color: "red"}}>** You should upload an image.</span> : ''}
              <CustomButton onClick={() => saveImage()} >Save</CustomButton>
            </div>
          ): null
        }
        <div>
          <h3>Image Profile</h3>
          <CustomButton style={{background: '#004e92'}} onClick={() => setChangeImage(true)}>Change</CustomButton>
        </div>
        <div>
          <h3>Products From My Cart</h3>
          <CustomButton style={{background: '#000428'}} onClick={() => dispatch(cleanCart())}>Clean Cart</CustomButton>
        </div>
        <div>
          <h3>Delete this Account</h3>
          <CustomButton style={{background: '#890000'}} onClick={() => deleteAcc(user.email)}>Delete Account</CustomButton>
        </div>
      </div>
    </section>
  )
}

export default User;
