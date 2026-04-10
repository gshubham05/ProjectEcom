import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { assets } from "../assets/assets/assets";

function Navbar() {
  const { name, currency,getCartCount } = useContext(ProductContext);
  return (
    <div className="flex justify-between px-[7vw] py-4">
      <div className="">
        <Link to="/">
          <h1 className="text-3xl">
            {currency} {name}
          </h1>
        </Link>
      </div>

      <div className="flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex gap-3">
        <div className="relative">
          <Link to="/cart"><img src={assets.cart_icon} className="w-6" alt="" /></Link>
          <p className="absolute p-1 -bottom-[0px] -right-[8px] rounded-xl text-[12px] bg-black text-white">{getCartCount()}</p>
        </div>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
}

export default Navbar;
