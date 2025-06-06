import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🌐 Krishna News Hub</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/world">World</Link>
        <Link to="/business">Business</Link>
        <Link to="/technology">Tech</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/Country">Country</Link>
      </nav>
    </header>
  );
}

export default Header;
