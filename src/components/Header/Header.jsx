import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './Header.scss';
import {auth} from '../../firebase';

const Header = ({user}) => {
  return (
    <header className='header'>
      <Link to='/' className='logo-container'>
        <i className="fab fa-wolf-pack-battalion logo"></i>
      </Link>
      <nav className='menu'>
      {
        user ? (
          <NavLink 
            to='/home' 
            className='menu_item' 
            activeStyle={{
              fontWeight: "bolder",
              color: 'white',
            }}
          >HOME</NavLink>
        ): null
      }
        <NavLink 
          to='/shop' 
          className='menu_item' 
          activeStyle={{
            fontWeight: "bolder",
            color: 'white',
          }}
        >SHOP</NavLink>
        <NavLink 
          to='/contact' 
          className='menu_item' 
          activeStyle={{
            fontWeight: "bolder",
            color: 'white',
          }}
        >CONTACT</NavLink>
        {
          user ? (
            <button className='logout' onClick={() => auth.signOut()}>
              LOG OUT
            </button>
            
          ): (
            <NavLink 
              to='/login' 
              className='menu_item' 
              activeStyle={{
                fontWeight: "bolder",
                color: 'white',
              }}
            >LOG IN</NavLink>
          )
        }
      </nav>
    </header>
  )
}

export default Header;
