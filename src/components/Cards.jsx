import React from "react";

function Cards({ index, image, price, name }) {
  return (
    <div key={index}>
      <div className="overflow-hidden">
        <img className="w-56 hover:scale-110 transition-all" src={image} alt="" />
      </div>
      <p className="text-sm text-gray-500">{name}</p>
      <p className="text-sm text-gray-500">₹{price}0</p>
    </div>
  );
}

export default Cards;
