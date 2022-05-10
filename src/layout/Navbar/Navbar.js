import React from "react";
import { useAccess } from "../../context/AccessContext";

import { useState, Link, signOut, auth, classes } from "./index";

export const Navbar = () => {
  const { data } = useAccess();
  const user = data?.user;
  const [isMenuActive, setIsMenuActive] = useState(false);

  const logout = () => {
    console.log("xd");
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
      <button
        className={classes.nav_hamburger}
        type="button"
        onClick={mobileMenuHandler}
      >
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
              <Link to="login" className={classes.navLink}>
                Login
              </Link>
            </ol>
          )}
          {!user && (
            <ol className={classes.navElem}>
              <Link to="register" className={classes.navLink}>
                Register
              </Link>
            </ol>
          )}
          {user && (
            <ol className={classes.navElem}>
              <Link to="/" onClick={logout} className={classes.navLink}>
                Log out
              </Link>
            </ol>
          )}
        </ul>
      </nav>
    </header>
  );
};
