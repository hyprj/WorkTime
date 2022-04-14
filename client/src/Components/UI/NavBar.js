import { Link } from "react-router-dom";

import classes from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/" className="reset">
          <p className={classes["nav__logo"]}>WorkTime</p>
        </Link>
        <ul className={classes["nav__list"]}>
          <ol className={classes["nav__elem"]}>
            <a href="" className={classes["nav__link"]}>
              About
            </a>
          </ol>
          <ol className={classes["nav__elem"]}>
            <Link to="schedule" className={classes["nav__link"]}>
              Schedule
            </Link>
          </ol>
          <ol className={classes["nav__elem"]}>
            <Link to="employees/1" className={classes.btn}>
              Log In
            </Link>
          </ol>
          <ol className={classes["nav__elem"]}>
            <a href="" className={classes["nav__link"]}>
              Register
            </a>
          </ol>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
