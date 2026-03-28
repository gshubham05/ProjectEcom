import React, { useEffect, useState } from "react";
import { products } from "../assets/assets/assets";
import Cards from "../components/Cards";

function AllProducts() {
  const [data, setData] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortPrice, setSortPrice] = useState("relevant");

  const [searchBar1, setSearchBar1] = useState("");

  const toggleCategory = (event) => {
    let v = event.target.value;
    setCategory((i) => (i.includes(v) ? i.filter((o) => o != v) : [...i, v]));
  };
  const toggleSubCategory = (event) => {
    // console.log('hi')
    let v = event.target.value;
    console.log(v);

    setSubCategory((i) =>
      i.includes(v) ? i.filter((o) => o != v) : [...i, v],
    );
  };

  const sorting = (event) => {
    console.log("sorting Function : ", event.target.value);
    setSortPrice(event.target.value);
  };

 
  useEffect(() => {
    let updateProducts = [...products];
    // console.log("sort Price before : ", sortPrice);
    if (category.length > 0) {
      updateProducts = updateProducts.filter((i) =>
        category.includes(i.category),
      );
    }
    if (subCategory.length > 0) {
      // console.log(subCategory);
      updateProducts= updateProducts.filter((i) =>
        subCategory.includes(i.subCategory),
      );
     
      // console.log(updateProducts);
    }

    if (searchBar1) {
      updateProducts = updateProducts.filter((i) =>
        i.name.toUpperCase().includes(searchBar1),
      );

    }

    if (sortPrice == "low") {
      // console.log("sort Price low : ", sortPrice);
      updateProducts = updateProducts.sort((a, b) => a.price - b.price);
      // console.log("sort Price low : ", updateProducts);
    } else if (sortPrice == "high") {
      // console.log("sort Price high : ", sortPrice);
      updateProducts = updateProducts.sort((a, b) => b.price - a.price);
      // console.log("sort Price high : ", updateProducts);
    }
    // console.log("updated Products ", updateProducts);
    setData(updateProducts);
  }, [category, subCategory, sortPrice, products, searchBar1]);
  return (
    <div>
      <div className="flex">
        <div className="left pt-2 fixed  top-[30%] w-[20%] h-[50vh]">
          <div className="flex flex-col gap-2 justify-start pl-2">
            <h1 className="font-semibold text-2xl mt-2">Category</h1>
            <label htmlFor="">
              <input
                onChange={toggleCategory}
                className="me-2"
                type="checkbox"
                value="Men"
              />{" "}
              Men
            </label>
            <label htmlFor="">
              <input
                onChange={toggleCategory}
                className="me-2"
                type="checkbox"
                value="Women"
              />{" "}
              Women
            </label>
            <label htmlFor="">
              <input
                onChange={toggleCategory}
                className="me-2"
                type="checkbox"
                value="Kids"
              />{" "}
              Kids
            </label>
          </div>
          <div className="flex flex-col gap-2 justify-start pl-2">
            <h1 className="font-semibold text-2xl mt-2">Sub Category</h1>
            <label htmlFor="">
              <input
                onChange={toggleSubCategory}
                className="me-2"
                type="checkbox"
                value="Topwear"
              />
              Topwear
            </label>
            <label htmlFor="">
              <input
                onChange={toggleSubCategory}
                className="me-2"
                type="checkbox"
                value="Bottomwear"
              />
              Bottomwear
            </label>
            <label htmlFor="">
              <input
                onChange={toggleSubCategory}
                className="me-2"
                type="checkbox"
                value="Winterwear"
              />
              Winterwear
            </label>
          </div>
        </div>
        <div className="right ml-[300px] w-[75%]">
          <h1> AllProducts</h1>
          <div className="flex items-center justify-start">
            <div className="search w-[80%] p-[10px] mb-[10px] ">
              <input
                onChange={(event)=>setSearchBar1(event.target.value.toUpperCase())}
                className="w-full outline-none p-2"
                type="text"
                placeholder="searh here..."
              />
            </div>
            <div className="sort mb-[10px] w-[25%]">
              <select onChange={sorting} name="" id="" className="w-full p-2">
                <option value="relevant">Sort</option>
                <option value="low">Low</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-4">
            {data.map((obj, index) => (
              <div key={index}>
                <Cards
                  id={obj._id}
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
