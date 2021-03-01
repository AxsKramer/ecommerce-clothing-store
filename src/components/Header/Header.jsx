import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const cart = useSelector((store) => store.cart);

  const logout = () => {
    dispatch(logoutUser());
    history.push("/login");
  };

  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <i className="fab fa-wolf-pack-battalion logo"></i>
      </Link>
      <nav className="menu">
        {user ? (
          <NavLink
            to="/home"
            className="menu_item"
            activeStyle={{
              fontWeight: "bolder",
              color: "white",
            }}
          >
            HOME
          </NavLink>
        ) : null}
        <NavLink
          to="/shop"
          className="menu_item"
          activeStyle={{
            fontWeight: "bolder",
            color: "white",
          }}
        >
          SHOP
        </NavLink>
        <NavLink
          to="/contact"
          className="menu_item"
          activeStyle={{
            fontWeight: "bolder",
            color: "white",
          }}
        >
          CONTACT
        </NavLink>
        {user ? (
          <>
            <CartIcon />
            <button className="logout" onClick={logout}>
              LOG OUT
            </button>
            {cart.hidden ? null : <CartDropdown />}
          </>
        ) : (
          <NavLink
            to="/login"
            className="menu_item"
            activeStyle={{
              fontWeight: "bolder",
              color: "white",
            }}
          >
            LOG IN
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
