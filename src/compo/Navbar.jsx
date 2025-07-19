import React, { useEffect } from "react";
import logo from "../assets/my-logo.svg";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Experience', path: '/experience' },
];

let sticky = false;
const Navbar = () => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      if (!sticky) {
        sticky = true;
        document.querySelector('.navbar').classList.add('sticky');
      }
    } else {
      if (sticky) {
        sticky = false;
        document.querySelector('.navbar').classList.remove('sticky');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="my-logo" />
            </a>
          </div>
          <div className="links">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="CTA">
            <a href="#" className="Wtrn_btn"><div>Contact Me</div></a>
          </div>
        </div>
      </div>
    </header>
  );
};
  

export default Navbar;
