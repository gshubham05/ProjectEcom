
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function Cart() {
  const { cartItems ,products} = useContext(ProductContext);
  const [cartData, setCartData] = useState([]);
  console.log(cartItems);
  useEffect(() => {
    const tempData = [];
    for (let id in cartItems) {
      for (let size in cartItems[id]) {
        tempData.push({
          _id: id,
          size: size,
          quantity: cartItems[id][size],
        });
      }
    }
    setCartData(tempData)
  }, [cartItems]);
  return (
  <div>
    {cartData.map((item,index)=>{
            let productData = products.find((obj)=>obj._id==item._id)
            return(
                <div>
                    <img src={productData.image[0]} alt="" />
                    <h1>{productData.name}</h1>
                </div>
            )
        })}
  </div>);
}

export default Cart;
