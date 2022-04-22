import styles from './Navbar.module.css';

import { AiOutlineShoppingCart as Cart } from 'react-icons/ai';
import { BiToggleLeft, BiToggleRight, BiMenu as Menu } from 'react-icons/bi';

import { NavLink } from 'react-router-dom';
import CartContainer from './CartContainer';

import { useState } from 'react';


function Navbar(props) {
  const [active, setActive] = useState(false);
  
  function toggle() {
    setActive(!active);
  }
  
  const [open, setOpen] = useState()

  const openBurguer = () => {
    setOpen(!open)
  }

  return (
    <>
      <header className={styles.nav}>
        <nav>
          <NavLink end to="/">
            <img
              src="../../images/logo.svg"
              alt="logo"
              className={`${styles.logo} ${
                props.theme === 'dark' ? styles.dark : ''
              }`}
            />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/collections">Collections</NavLink>
            </li>
            <li>
              <NavLink to="/men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.profile}>
          <button onClick={props.switchTheme}>
            {props.theme === 'dark' ? <BiToggleRight /> : <BiToggleLeft />}
          </button>
          <Cart className={styles.cart} onClick={toggle} />
          <img
            src="../../images/image-avatar.png"
            alt="avatar"
            className={styles.avatar}
          />
        </div>
        <CartContainer active={active} />
      </header>
      <header className={styles.navmobile}>
        <div>
          <Menu onClick={openBurguer}/>
          <nav className={open == true ? styles.navMobOn : styles.navMobOff}> 
            <ul>
              <li>
                <NavLink to="/collections">Collections</NavLink>
              </li>
              <li>
                <NavLink to="/men">Men</NavLink>
              </li>
              <li>
                <NavLink to="/women">Women</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className={styles.mobiletheme}>
                <button onClick={props.switchTheme}>
                  {props.theme === 'dark' ? (
                    <BiToggleRight />
                  ) : (
                    <BiToggleLeft />
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <NavLink end to="/">
          <img
            src="../../images/logo.svg"
            alt="logo"
            className={`${styles.logo} ${
              props.theme === 'dark' ? styles.dark : ''
            }`}
          />
        </NavLink>
        <div className={styles.profmobile}>
          <Cart className={styles.cart} onClick={toggle} />
          <img
            src="../../images/image-avatar.png"
            alt="avatar"
            className={styles.avatar}
          />
        </div>
        <CartContainer active={active} />
      </header>
    </>
  );
}

export default Navbar;
