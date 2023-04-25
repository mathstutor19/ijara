import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import { FaTelegram, FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa';
import './Footer.css';
import appStore from '../../assets/app-store.svg';
import playStore from '../../assets/google-play.svg';
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-container">
          <div className="footer-left">
            <h2 className="heading-three">Ijara.uz</h2>
            <p className="footer-text paragraph">
              Uzbekistonda talabalarga uy topish, ish topish va kutubxona topish
              platformasi.
            </p>
            <div className="footer-image-wrapper">
              <Link className="footer-image-link">
                <img src={appStore} alt="appStore" />
              </Link>
              <Link className="footer-image-link">
                <img src={playStore} alt="playstore" />
              </Link>
            </div>
          </div>
          <div className="footer-right">
            <h2 className="heading-three">Contact</h2>
            <ul className="footer-links">
              <li className="footer-link">
                <FaPhone className="footer-icon" />
                <Link className="footer-link-active paragraph">
                  +998941234567
                </Link>
              </li>
              <li className="footer-link">
                <FaTelegram className="footer-icon" />
                <Link className="footer-link-active paragraph">Telegram</Link>
              </li>
              <li className="footer-link">
                <FaFacebookF className="footer-icon" />
                <Link className="footer-link-active paragraph">Facebook</Link>
              </li>
              <li className="footer-link">
                <FaInstagram className="footer-icon" />
                <Link className="footer-link-active paragraph">Instagram</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
