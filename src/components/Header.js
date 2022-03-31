import { useState } from 'react';
import './Header.scss';
import photo from '../png/logo.png';
import useDelay from '../hooks/useDelay';

const mountedStyle = { animation: 'inAnimation 270ms ease-in' };
const unmountedStyle = {
  animation: 'outAnimation 270ms ease-out',
  animationFillMode: 'forwards'
};

function Header() {
  const [open, setOpen] = useState(false);
  const showDiv = useDelay(open, 250);
  return (
    <div>
      <header className="header">
        <div className="header-box">
          <div>
            <a className="logo">
              <img src={photo} alt="Logo" />
            </a>
          </div>
          <nav className="notDisplay">
            <ul className="ul">
              <li className="li">
                <a href="#top">STRONA GŁÓWNA</a>
              </li>
              <li className="li">
                <a href="#info">ZAKRES PRAC</a>
              </li>
              <li className="li">
                <a href="#slider">GALERIA</a>
              </li>
              <li className="li">
                <a href="#contact">KONTAKT</a>
              </li>
            </ul>
          </nav>
          <button onClick={() => setOpen(!open)} type="button" className="button display">
            ☰
          </button>
        </div>
      </header>
      <div className="header-repair" />
      {showDiv && (
        <div
          className="transition background display not border-bottom"
          style={open ? mountedStyle : unmountedStyle}>
          <nav>
            <ul className="ul">
              <li className="border-bottom li">
                <a href="#top" onClick={() => setOpen(!open)}>
                  STRONA GŁÓWNA
                </a>
              </li>
              <li className="border-bottom li">
                <a href="#info" onClick={() => setOpen(!open)}>
                  ZAKRES PRAC
                </a>
              </li>
              <li className="border-bottom li">
                <a href="#slider" onClick={() => setOpen(!open)}>
                  GALERIA
                </a>
              </li>
              <li className="li">
                <a href="#contact" onClick={() => setOpen(!open)}>
                  KONTAKT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
