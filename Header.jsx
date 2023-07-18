// Header.js
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass,faPhone,faImages } from '@fortawesome/free-solid-svg-icons';
import Logo from '../src/assets/LOGO.jpg';
function Header() {
  return (
    <header className="header">
      <div className="header-name">
      <img src={Logo} alt="Visiting Card" />
      </div>
      <ul className="header-links">
        <li>
            <a href="https://www.google.com/maps/dir//Nutan+Printing+Press,+Near+Police+Station,+Near+Puliya,+Panch+Paoli,+Panch+Paoli,+Nagpur,+Maharashtra+440017/@21.1645883,79.1030732,15z/data=!4m16!1m7!3m6!1s0x3bd4c0c011f8b8d1:0xe75ee6b904a09aea!2sNutan+Printing+Press!8m2!3d21.1645883!4d79.1030732!16s%2Fg%2F1tdqm33z!4m7!1m0!1m5!1m1!1s0x3bd4c0c011f8b8d1:0xe75ee6b904a09aea!2m2!1d79.1030732!2d21.1645883?entry=ttu"  target='_blank'>
                <FontAwesomeIcon icon={faCompass} className='shraddha'/>
                Get Directions</a>
        </li>
        <li>
            <a href="#">
                <FontAwesomeIcon icon={faImages}className='shraddha'/>
                Gallery
                </a>
        </li>
        <li>
            <a href="tel:+91-9545539709">
                <FontAwesomeIcon icon={faPhone} className='shraddha'/>
                Contact Us</a>
            </li>
      </ul>
    </header>
  );
}

export default Header;
