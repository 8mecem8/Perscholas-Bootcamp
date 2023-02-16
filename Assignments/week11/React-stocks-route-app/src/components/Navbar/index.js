import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => 
{
  return (
    <nav >
      <Link to="/">
        <button>Dashboard</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </nav>
  );
};

export default Navbar;
