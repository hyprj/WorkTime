import {
  React,
  useAccess,
  useState,
  Link,
  signOut,
  auth,
  classes,
} from "./index";

export const Navbar = () => {
  const { data } = useAccess();
  const user = data?.user;
  const [isMenuActive, setIsMenuActive] = useState(false);

  const logout = () => {
    // console.log("XD");
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
            ? `${classes.nav} ${classes.nav___active}`
            : `${classes.nav}`
        }
      >
        <Link to="/" className="reset">
          <p className={classes.nav_logo}>WorkTime</p>
        </Link>
        <ul className={classes.nav_list}>
          <ol className={classes.nav_elem}>
            <Link to="about" className={classes.nav_link}>
              About
            </Link>
          </ol>
          {user?.isManager && (
            <ol className={classes.nav_elem}>
              <Link to="management" className={classes.nav_link}>
                Management
              </Link>
            </ol>
          )}
          {user && (
            <ol className={classes.nav_elem}>
              <Link to="me" className={classes.nav_link}>
                Me
              </Link>
            </ol>
          )}
          {!!user?.organization && (
            <ol className={classes.nav_elem}>
              <Link to="schedule" className={classes.nav_link}>
                Schedule
              </Link>
            </ol>
          )}
          <div className={classes.nav_access}>
            {!user && (
              <ol className={classes.nav_elem}>
                <Link to="login" className={classes.nav_link}>
                  Login
                </Link>
              </ol>
            )}
            {!user && (
              <ol className={classes.nav_elem}>
                <Link to="register" className={classes.nav_link}>
                  Register
                </Link>
              </ol>
            )}
            {user && (
              <ol className={classes.nav_elem}>
                <Link to="/" onClick={logout} className={classes.nav_link}>
                  Log out
                </Link>
              </ol>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};
