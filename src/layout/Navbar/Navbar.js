import React from "react";
import { useAccess } from "../../context/AccessContext";

import {
  useContext,
  useState,
  Link,
  signOut,
  auth,
  classes,
  AccessContext,
  Button,
} from "./index";

export const Navbar = () => {
  // const { user } = useContext(AccessContext);
  const { data } = useAccess();
  const user = data?.user;
  const [isMenuActive, setIsMenuActive] = useState(false);

  const logout = () => {
    signOut(auth).catch((err) => console.log(err));
  };

  const mobileMenuHandler = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  };

  const closeMenu = () => {
    if (isMenuActive) setIsMenuActive(false);
  };

  return (
    <header className={classes.header}>
      <button type="button" onClick={mobileMenuHandler}>
        <i className={`fa-solid fa-bars fa-2xl ${classes.hamburger}`} />
      </button>
      <nav
        className={
          isMenuActive
            ? `${classes.nav} ${classes.navActive}`
            : `${classes.nav}`
        }
      >
        <Link to="/" className="reset">
          <p className={classes.navLogo}>WorkTime</p>
        </Link>
        <ul className={classes.navList}>
          <ol className={classes.navElem}>
            <Link to="about" className={classes.navLink}>
              About
            </Link>
          </ol>
          {user?.isManager && (
            <ol className={classes.navElem}>
              <Link to="management" className={classes.navLink}>
                Management
              </Link>
            </ol>
          )}
          {user && (
            <ol className={classes.navElem}>
              <Link to="me" className={classes.navLink}>
                Me
              </Link>
            </ol>
          )}
          {!!user?.organization && (
            <ol className={classes.navElem}>
              <Link to="schedule" className={classes.navLink}>
                Schedule
              </Link>
            </ol>
          )}
          {!user && (
            <ol className={classes.navElem}>
              <Button>
                <Link to="login">Log In</Link>
              </Button>
            </ol>
          )}
          {!user && (
            <ol className={classes.navElem}>
              <Button color="purple">
                <Link to="register">Register</Link>
              </Button>
            </ol>
          )}
          {user && (
            <ol className={classes.navElem}>
              <span
                className={classes.navLink}
                onClick={logout}
                role="button"
                tabIndex="0"
              >
                Log out
              </span>
            </ol>
          )}
        </ul>
      </nav>
    </header>
  );
};
