import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='logo-container'>
        <i className="fab fa-wolf-pack-battalion logo"></i>
      </Link>
      <nav className='menu'>
        <NavLink 
          to='/home' 
          className='menu_item' 
          activeStyle={{
            fontWeight: "bolder",
            color: 'white',
          }}
        >HOME</NavLink>
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
        <NavLink 
          to='/login' 
          className='menu_item' 
          activeStyle={{
            fontWeight: "bolder",
            color: 'white',
          }}
        >LOGIN</NavLink>
        <button className='logout' >
          LOGOUT
        </button>
      </nav>
    </header>
  )
}

export default Header;
