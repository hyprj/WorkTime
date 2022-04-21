import { useContext, useState, Link, signOut, auth, classes, AccessContext, Button } from "./index";

export const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isLoggedIn = useContext(AccessContext) ? true : false;
  const isManager = useContext(AccessContext)?.user.isManager ? true : false;
  

  const logout = () => {
    signOut(auth).then(() => console.log("user signed out")).catch((err) => console.log(err));
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
          {isManager && <ol className={classes.navElem} onClick={closeMenu}>
            <Link to="management" className={classes.navLink}>
              Management
            </Link>
          </ol>}
          {isLoggedIn && <ol className={classes.navElem} onClick={closeMenu}>
            <Link to="me" className={classes.navLink}>
              Me
            </Link>
          </ol>}
          <ol className={classes.navElem} onClick={closeMenu}>
            <Link to="schedule" className={classes.navLink}>
              Schedule
            </Link>
          </ol>
          {!isLoggedIn && <ol className={classes.navElem} onClick={closeMenu}>
            <Button><Link to="login">
              Log In
            </Link></Button>
          </ol>}
          {!isLoggedIn && <ol className={classes.navElem} onClick={closeMenu}>
            <Button color="purple"><Link to="register">
              Register
            </Link></Button>
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