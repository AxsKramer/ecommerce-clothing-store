import React, {useState, useRef, useEffect} from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [isClose, setClose] = useState(true);
  const cart = useSelector((store) => store.cart);
  const menu = useRef(null);

  useEffect(() => {
    if(isClose){
      menu.current.classList.remove('open');
    }else{
      menu.current.classList.add('open');
    }
  },[isClose])

  const logout = () => {
    dispatch(logoutUser());
    history.push("/login");
  };

  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <i className="fab fa-wolf-pack-battalion logo"></i>
      </Link>
      <nav ref={menu} className="menu">
        {user ? (
          <NavLink
            to="/home"
            className="menu_item"
            activeStyle={{
              fontWeight: "bolder",
              color: "white",
            }}
            onClick={() => setClose(true)}
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
          onClick={() => setClose(true)}
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
          onClick={() => setClose(true)}
        >
          CONTACT
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
      {
        user ? (
          <>
            <CartIcon />
            {cart.hidden ? null : <CartDropdown />}
          </>
        ) : null
      }
      <HamburgerMenu isClose={isClose} setClose={setClose}/>
    </header>
  );
};

export default Header;
