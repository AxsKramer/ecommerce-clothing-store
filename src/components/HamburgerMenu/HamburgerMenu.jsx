import React, {useEffect, useRef} from 'react';
import './HamburgerMenu.scss';

const HamburgerMenu = ({isClose, setClose}) => {

  const btn = useRef(null);

  const handleClick = () => {
    btn.current.classList.toggle('open');
    setClose(!isClose)
  };

  useEffect(() => {
    if(isClose){
      btn.current.classList.remove('open');
    }
  }, [isClose])  

  return (
    <button ref={btn} onClick={handleClick } className='hamburger-button' aria-label='Button menu'>
      <span className='top-line'></span>
      <span className='middle-line'></span>
      <span className='bottom-line'></span>
    </button>
  )
}

export default HamburgerMenu
