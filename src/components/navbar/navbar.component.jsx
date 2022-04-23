import React from 'react';
import './navbar.styles.css';
// import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">My Vote</Link>
      </div>
      <div className="nav-right">
        <div className="nav-option">
          <Link to="/register">Register</Link>
        </div>
        <Link to="/login">
          {/* <Button variant="outlined" className="nav-option">
            Self host
          </Button> */}
          Log in
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
