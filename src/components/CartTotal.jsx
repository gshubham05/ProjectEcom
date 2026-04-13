import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function CartTotal() {
  const { getCartTotal } = useContext(ProductContext);
  let delivery = 20;
  return (
    <div className="my-10">
      <div className="flex justify-between ">
        <p>Sub Total</p>
        <p>{getCartTotal()}</p>
      </div>
      <hr className="text-gray-300" />
      
       <div className="flex justify-between">
        <p>delivery</p>
        <p>{delivery}</p>
      </div>
      <hr className="text-gray-300" />
      <div className="flex justify-between">
        <p className="font-medium">Total</p>
        <p>{getCartTotal() + delivery}</p>
      </div>
     
    </div>
  );
}

export default CartTotal;
