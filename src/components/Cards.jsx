import React from "react";
import { Link } from "react-router-dom";

function Cards({ index, image, price, name, id }) {
  // console.log(id);
  return (
    <Link to={`/products/${id}`} key={index}>
      <div className="overflow-hidden">
        <img
          className="w-56 hover:scale-110 transition-all"
          src={image}
          alt=""
        />
      </div>
      <p className="text-sm text-gray-500">{name}</p>
      <p className="text-sm text-gray-500">₹{price}0</p>
    </Link>
  );
}

export default Cards;
