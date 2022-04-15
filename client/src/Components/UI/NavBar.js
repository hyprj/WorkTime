import { useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../Hooks/useWindowSize";

import classes from "./NavBar.module.scss";

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  // const windowSize = useWindowSize();

  const mobileMenuHandler = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }

  const closeMenu = () => {
    if (isMenuActive) setIsMenuActive(false);
  }

  return (
    <header className={classes.header}>
      <i className={`fa-solid fa-bars fa-2xl ${classes.hamburger}`} onClick={mobileMenuHandler}></i>
      <nav className={isMenuActive ? `${classes.nav} ${classes.navActive}` : `${classes.nav}`}>
        <Link to="/" className="reset" onClick={closeMenu}>
          <p className={classes.navLogo}>WorkTime</p>
        </Link>
        <ul className={classes.navList} onClick={closeMenu}>
          <ol className={classes.navElem}>
            <Link to="/About" className={classes.navLink}>
              About
            </Link>
          </ol>
          <ol className={classes.navElem} onClick={closeMenu}>
            <Link to="schedule" className={classes.navLink}>
              Schedule
            </Link>
          </ol>
          <ol className={classes.navElem} onClick={closeMenu}>
            <Link to="employees/1" className={classes.btn}>
              Log In
            </Link>
          </ol>
          <ol className={classes.navElem} onClick={closeMenu}>
            <a href="" className={classes.navLink}>
              Register
            </a>
          </ol>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
