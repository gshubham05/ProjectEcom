import React, { useState } from "react";
import { products } from "../assets/assets/assets";
import Cards from "./Cards";
import Title from "./Title";

function Products() {
  // usestate
  const [productData, setProductData] = useState(products);
  // console.log(productData);
  return (
    <div className="my-10 flex flex-col justify-center items-center">
    <Title t1="Latest" t2="Collection" />
      <div className="flex justify-center items-center flex-wrap gap-4 px-[7vw] ">
        {productData.slice(0, 8).map((obj, index) => (
          <Cards
            index={index}
            image={obj.image[0]}
            price={obj.price}
            name={obj.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
