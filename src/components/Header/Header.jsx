import React, {useState, useRef, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import Navbar from '../Navbar/Navbar';
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
      <Link to="/" className="logo-container" title='Logo'>
        <i className="fab fa-wolf-pack-battalion logo"></i>
      </Link>
      <Navbar refMenu={menu} user={user} isClose={isClose} setClose={setClose} cart={cart} logout={logout}/>
    </header>
  );
};

export default Header;
