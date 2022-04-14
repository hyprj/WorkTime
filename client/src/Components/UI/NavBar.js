import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  return (
    <header className="header">
    
      <nav className="nav">
        <Link to="/" className="reset"><p className="nav__logo">Time Efficient</p></Link>
        <ul className="nav__list">
          <ol className="nav__elem">
            <a href="" className="nav__link">
              About
            </a>
          </ol>
          <ol className="nav__elem">
            <Link to="employees/1" className="btn">
              Log In
            </Link>
          </ol>
          <ol className="nav__elem">
            <a href="" className="nav__link">
              Register
            </a>
          </ol>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;