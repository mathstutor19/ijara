import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './Header.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
function Header() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');
  const [showMenu, setShowMenu] = useState(false);
  const [pageState, setPageState] = useState('Kirish');
  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

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
    <header>
      <Container>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Ijara.uz</Link>
          </div>
          <ul className={active}>
            <li className="menu-item">
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li className="menu-item">
              <Link to="/uylar">Uylar</Link>
            </li>
            <li className="menu-item">
              <Link to="/ishlar">Ishlar</Link>
            </li>
            <li className="menu-item">
              <Link to="/barklar">Barklar</Link>
            </li>
            <li className="menu-item">
              <Link to="/kutubxonalar">Kutubxonalar</Link>
            </li>

            <li className="menu-item">
              {pageState === 'Kabinet' ? (
                <Link to="/profile">{pageState}</Link>
              ) : (
                <Link to="/sign-in">{pageState}</Link>
              )}
            </li>
          </ul>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
