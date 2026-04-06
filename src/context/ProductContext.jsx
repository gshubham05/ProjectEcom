import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets/assets";
// createContext
export let ProductContext = createContext();

// provider

function ProductProvider({ children }) {
  let name = "Codeware IT";
  let currency = "$";
  let [cartItems, setCartItems] = useState({});
  const obj = {
    name,
    currency,
    products,
    addToBag,
  };

  function addToBag(id, size) {
    if (!size) {
      return alert("please select Size first");
    }
    let cartData = structuredClone(cartItems);

    if (cartData[id]) {
      if (cartData[id][size]) {
        console.log("same size");
        console.log(`id ${id} size ${size}`);
        // cartData[id][size] = cartData[id][size] + 1
        cartData[id][size] += 1;
        // console.log(cartItems)
      } else {
        console.log(`id ${id} size ${size}`);
        console.log("different size");
        cartData[id][size] = 1;
        // console.log(cartItems)
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
      console.log(cartItems);
    }
    setCartItems(cartData);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [addToBag]);
  return (
    <ProductContext.Provider value={obj}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;
