import React, { useEffect, useState } from "react";
import { products } from "../assets/assets/assets";
import Cards from "./Cards";
import Title from "./Title";

function RelatedProducts({ category, subcategory }) {
  const [relate, setRelate] = useState([]);
  useEffect(() => {
    let relatedProducts = products.slice();
    relatedProducts = relatedProducts.filter((i) => i.category == category);
    relatedProducts = relatedProducts.filter(
      (i) => i.subCategory == subcategory,
    );
    setRelate(relatedProducts);
  }, [products]);
  return (
    <div className="my-10 flex flex-col justify-center items-center">
      <Title t1="Related" t2="Products" />
      <div className="flex flex-wrap gap-4 px-[5vw]">
        {relate.slice(0, 4).map((obj, index) => (
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

export default RelatedProducts;
