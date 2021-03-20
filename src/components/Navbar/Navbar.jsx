import React from "react";
import {NavLink} from 'react-router-dom';
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Navbar.scss';

const Navbar = ({user, setClose, isClose, cart, refMenu, logout, displayName}) => {

  return (
    <>
      <nav ref={refMenu} className="menu">
        {user ? (
          <NavLink
            to={`/user/${user.displayName}`}
            className="menu_item"
            activeStyle={{
              fontWeight: "bolder",
              color: "white",
            }}
            onClick={() => setClose(true)}
          >
            {user !== null && user.displayName}
          </NavLink>
        ) : null}
        <NavLink
          to="/"
          exact
          className="menu_item"
          activeStyle={{
            fontWeight: "bolder",
            color: "white",
          }}
          onClick={() => setClose(true)}
        >
          HOME
        </NavLink>
        <NavLink
          to="/categories"
          className="menu_item"
          activeStyle={{
            fontWeight: "bolder",
            color: "white",
          }}
          onClick={() => setClose(true)}
        >
          CATEGORIES
        </NavLink>
        <NavLink
          to="/shop"
          className="menu_item"
          activeStyle={{
            fontWeight: "bolder",
            color: "white",
          }}
          onClick={() => setClose(true)}
        >
          SHOP
        </NavLink>
        {user ? (
          <>
            <button className="logout" onClick={logout}>
              LOG OUT
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className="menu_item"
            activeStyle={{
              fontWeight: "bolder",
              color: "white",
            }}
            onClick={() => setClose(true)}
          >
            LOG IN
          </NavLink>
        )}
      </nav>
      {user ? (
        <>
          <CartIcon />
          {cart.hidden ? null : <CartDropdown />}
        </>
      ) : null}
      <HamburgerMenu isClose={isClose} setClose={setClose} />
    </>
  );
};

export default Navbar;
