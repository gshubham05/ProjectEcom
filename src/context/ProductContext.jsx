import { createContext, Profiler, useEffect, useState } from "react";
import { products } from "../assets/assets/assets";
// createContext
export let ProductContext = createContext();

// provider

function ProductProvider({ children }) {
  let name = "Codeware IT";
  let currency = "$";
  let [cartItems, setCartItems] = useState({});





  const getCartCount = () => {
    let totalCount = 0;
    for (let id in cartItems) {
      console.log(id);
      for (let size in cartItems[id]) {
        console.log("sizes : ", size);
        console.log("qnty : ", cartItems[id][size]);
        totalCount += cartItems[id][size];
      }
    }
    return totalCount;
  };

  


  function addToBag(id, size) {
    if (!size) {
      return alert("please select Size first");
    }
    let cartData = structuredClone(cartItems);

    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
    }
    setCartItems(cartData);

  }

const updateQty = (itemId,size,quantity)=>{
let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
}

const getCartTotal=()=>{
  let totalAmount = 0
  for(let id in cartItems){
    let itemInfo = products.find((i)=>i._id == id)
    for (let size in cartItems[id]){
      if(cartItems[id][size]){
        totalAmount += itemInfo.price * cartItems[id][size]
      }
    }
  }
  return totalAmount
}

const abc=()=>{
  console.log("del")
}

    const obj = {
      updateQty,
    name,
    currency,
    getCartTotal,
    products,
    addToBag,
    cartItems,
    getCartCount,abc
  };

  useEffect(() => {
    // console.log(cartItems)
  
  }, [cartItems]);
  return (
    <ProductContext.Provider value={obj}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;
