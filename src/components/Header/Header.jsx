import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import './Header.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
function Header() {
  const [active, setActive] = useState('nav__menu-small-toggle');
  const [icon, setIcon] = useState('nav__toggler');
  const [showMenu, setShowMenu] = useState(false);
  const [pageState, setPageState] = useState('Kirish');
  const navToggle = () => {
    if (active === 'nav__menu-small-toggle') {
      setActive('nav__menu-small');
    } else setActive('nav__menu-small-toggle');

    // Icon Toggler
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState('Kabinet');
      } else {
        setPageState('Kirish');
      }
    });
  }, [auth]);
  return (
    <header className="header">
      <Container>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Ijara.uz</Link>
          </div>
          <ul className="nav__menu">
            <li className="menu-item">
              <NavLink activeclassname="active" to="/">
                Bosh sahifa
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeclassname="active" to="/uylar">
                Uylar
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeclassname="active" to="/ishlar">
                Ishlar
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink activeclassname="active" to="/universitetlar">
                Universitetlar
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeclassname="active" to="/kutubxonalar">
                Kutubxonalar
              </NavLink>
            </li>

            <li className="menu-item">
              {pageState === 'Kabinet' ? (
                <NavLink activeclassname="active" to="/profile">
                  {pageState}
                </NavLink>
              ) : (
                <NavLink activeclassname="active" to="/sign-in">
                  {pageState}
                </NavLink>
              )}
            </li>
          </ul>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div onClick={navToggle} className={active}>
            <ul className="menu-items-small">
              <li className="menu-item">
                <NavLink activeclassname="active" to="/">
                  Bosh sahifa
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink activeclassname="active" to="/uylar">
                  Uylar
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink activeclassname="active" to="/ishlar">
                  Ishlar
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink activeclassname="active" to="/universitetlar">
                  Universitetlar
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink activeclassname="active" to="/kutubxonalar">
                  Kutubxonalar
                </NavLink>
              </li>

              <li className="menu-item">
                {pageState === 'Kabinet' ? (
                  <NavLink activeclassname="active" to="/profile">
                    {pageState}
                  </NavLink>
                ) : (
                  <NavLink activeclassname="active" to="/sign-in">
                    {pageState}
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
