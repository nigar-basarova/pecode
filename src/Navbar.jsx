
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";



const Navbar = () => {
  const qaraGundeOlanMenyu = useRef();

  const menyunuAc = () => {
    qaraGundeOlanMenyu.current.classList.add("aktiv");
  };

  const menyunuBagla = () => {
    qaraGundeOlanMenyu.current.classList.remove("aktiv");
  };

  return (
    <>
      <div className="mobile-menu position-fixed" ref={qaraGundeOlanMenyu}>
        <IoClose className="text-white baglama-iconu" onClick={menyunuBagla} />
        <nav className="mobile-links">
          <Link to="/what-we-do">What we do</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/assets/images/logo.svg" alt="Company Logo" />
          </Link>
          <button
            onClick={menyunuAc}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/what-we-do">What we do</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career">Career</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bizimle-elaqe">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
