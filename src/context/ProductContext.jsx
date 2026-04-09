import { createContext, Profiler, useEffect, useState } from "react";
import { products } from "../assets/assets/assets";
// createContext
export let ProductContext = createContext();

// provider

function ProductProvider({ children }) {
  let name = "Codeware IT";
  let currency = "$";
  let [cartItems, setCartItems] = useState({});





  const getCartTotal = () => {
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

const updateQty = (id,size,qty)=>{
  console.log(`id = ${id} size = ${size} qty = ${qty}`)
  let c = structuredClone(cartItems)
  console.log("cart items : ",c)
  console.log("c[id] ",c[id])
  c[id][size] = qty
  console.log("after update ",c)
  console.log("c[id][size] ",c[id][size])
  setCartItems(c)
}

const abc=()=>{
  console.log("del")
}

    const obj = {
      updateQty,
    name,
    currency,
    products,
    addToBag,
    cartItems,
    getCartTotal,abc
  };

  useEffect(() => {
    // console.log(cartItems)
  
  }, [cartItems]);
  return (
    <ProductContext.Provider value={obj}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;
