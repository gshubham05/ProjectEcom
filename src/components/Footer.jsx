import React from "react";
import { assets } from "../assets/assets/assets";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="h-[100px] bg-red-400">
      <div className="flex justify-around">
        <div className="brand">
          <img src={assets.logo} alt="" />
        </div>
        <div className="links flex gap-3 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="socialLinks flex gap-3">
          <p>insta</p>
          <p>fb</p>
          <p>github</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
