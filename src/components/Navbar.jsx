import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between px-[7vw] py-4">
      <div className="">
        <Link to="/">
          <h1 className="text-3xl">codewareIT</h1>
        </Link>
      </div>

      <div className="flex gap-3">
        
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        
      </div>

      <div className="flex gap-3">
        <Link to="/cart">Cart</Link>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
}

export default Navbar;
