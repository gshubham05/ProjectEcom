import React, { useEffect, useState } from "react";
import Title from "./Title";
import { products } from "../assets/assets/assets";
import Cards from "./Cards";

function TrendingProduct() {
  const [trending, setTrending] = useState(products);
  const Trend = () => {
    let c = trending.filter((obj) => obj.bestseller == true);
    setTrending(c);
  };
  useEffect(() => {
    Trend();
  }, []);
  return (
    <div className="my-10 flex flex-col justify-center items-center">
      <Title t1="Trending" t2="Products" />
      <div className="flex flex-wrap gap-4 px-[7vw]">
        {trending.slice(0, 4).map((obj, index) => (
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

export default TrendingProduct;
