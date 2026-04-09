import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { assets } from "../assets/assets/assets";

function Cart() {
  const { cartItems, products, currency,updateQty,abc } = useContext(ProductContext);
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
    console.log(tempData);
    setCartData(tempData);
  }, [cartItems]);
  return (
    <div>
      {cartData.map((item, index) => {
        let productData = products.find((obj) => obj._id == item._id);
        return (
          <div className="px-[7vw] my-10 grid grid-cols-[4fr_2fr_0.5fr] items-center">
            <div className="flex items-center gap-6">
              <img className="w-20" src={productData.image[0]} alt="" />
              <div className="flex flex-col">
                <p className="text-lg font-medium">{productData.name}</p>
                <div className="flex items-center gap-5 mt-2">
                  <p>
                    {currency}
                    {productData.price}
                  </p>
                  <p className="px-3 py-1 border bg-slate-50">{item.size}</p>
                </div>
              </div>
            </div>

            <div className="">
              <input onChange={(e)=>e.target.value==" " || e.target.value =="0"? null :updateQty(item._id,item.size,Number(e.target.value))} min={1} defaultValue={item.quantity} type="number" className="border" />
            </div>
            <img onClick={()=>updateQty(item._id,item.size,0)} className="w-5 cursor-pointer" src={assets.bin_icon} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
