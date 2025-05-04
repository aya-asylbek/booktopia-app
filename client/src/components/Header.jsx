import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="flex justify-between items-center bg-black bg-opacity-60 text-white px-6 py-4">
    <h1 className="text-xl font-bold">Booktopia</h1>
    <nav className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/register" className="hover:underline">Register</Link>
    </nav>
  </header>
);

export default Header;
