import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { GiAxeSword } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={classes.navbar}>
          <div className={`${classes.navbarContainer}  ${classes.container}`}>
            <Link
              to="/"
              className={classes.navbarLogo}
              onClick={closeMobileMenu}
            >
              <GiAxeSword className={classes.navbarIcon} />
              W-J-Knight
            </Link>
            <ul
              className={
                click ? `${classes.navMenu} ${classes.active}` : classes.navMenu
              }
            >
              <li className={classes.navItem}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    classes.navLinks + (isActive ? ` ${classes.activated}` : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    classes.navLinks + (isActive ? ` ${classes.activated}` : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className={classes.navItem}>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    classes.navLinks + (isActive ? ` ${classes.activated}` : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <div
              className={`${classes.menuIcon} ${classes.menuHamburger}`}
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;