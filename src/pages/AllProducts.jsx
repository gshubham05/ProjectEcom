import React, { useState } from "react";
import { products } from "../assets/assets/assets";
import Cards from "../components/Cards";

function AllProducts() {
  const [data, setData] = useState(products);
  return (
    <div>
      <div className="flex">
        <div className="left pt-2 fixed  top-[30%] w-[20%] h-[50vh]">
          <div className="flex flex-col gap-2 justify-start pl-2">
          <h1 className="font-semibold text-2xl mt-2">Category</h1>
            <label htmlFor=""><input className="me-2" type="checkbox" value='Men' /> Men</label>
            <label htmlFor=""><input className="me-2" type="checkbox" value='Women' /> Women</label>
            <label htmlFor=""><input className="me-2" type="checkbox" value='Kids' /> Kids</label>
          </div>
          <div className="flex flex-col gap-2 justify-start pl-2">
          <h1 className="font-semibold text-2xl mt-2">Sub Category</h1>
            <label htmlFor=""><input className="me-2" type="checkbox" value='Topwear' />Topwear</label>
            <label htmlFor=""><input className="me-2" type="checkbox" value='Bottomwear' />Bottomwear</label>
            <label htmlFor=""><input className="me-2" type="checkbox" value='Winterwear' />Winterwear</label>
          </div>
        </div>
        <div className="right ml-[300px] w-[75%]">
          <h1> AllProducts</h1>
          <div className="flex items-center justify-start">
            <div className="search w-[80%] p-[10px] mb-[10px] ">
              <input
                className="w-full outline-none p-2"
                type="text"
                placeholder="searh here..."
              />
            </div>
            <div className="sort mb-[10px] w-[25%]">
              <select name="" id="" className="w-full p-2">
                <option value="relevant">Sort</option>
                <option value="low">Low</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-4">
            {data.map((obj, index) => (
              <div>
                <Cards
                  index={index}
                  image={obj.image[0]}
                  price={obj.price}
                  name={obj.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
