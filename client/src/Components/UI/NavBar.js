import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { signOut} from "firebase/auth";
import { fb } from "../../service/firebase";

import classes from "./NavBar.module.scss";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isLoggedIn = useContext(AuthContext) ? true : false;

  const logout = () => {
    signOut(fb.auth).then(() => console.log("user signed out")).catch((err) => console.log(err));
  }

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
            <Link to="about" className={classes.navLink}>
              About
            </Link>
          </ol>
          <ol className={classes.navElem} onClick={closeMenu}>
            <Link to="schedule" className={classes.navLink}>
              Schedule
            </Link>
          </ol>
          {!isLoggedIn && <ol className={classes.navElem} onClick={closeMenu}>
            <Link to="login" className={classes.btn}>
              Log In
            </Link>
          </ol>}
          {!isLoggedIn && <ol className={classes.navElem} onClick={closeMenu}>
            <Link to="register" className={classes.navLink}>
              Register
            </Link>
          </ol>}
          {isLoggedIn && <ol className={classes.navElem} onClick={closeMenu}>
            <span className={classes.navLink} onClick={logout}>
              Log out
            </span>
          </ol>}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
