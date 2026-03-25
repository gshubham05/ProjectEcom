import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/assets/assets";

function Product() {
  let { pid } = useParams();
  const [findProduct, setFindProduct] = useState(false);
  const [image, setImage] = useState(null);
  const fetchProduct = () => {
    let d = products.find((i) => i._id == pid);
    if (d) {
      setFindProduct(d);
      setImage(d.image[0]);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [pid]);
  return (
    <div className="min-h-[85vh] px-[7vw]">
      {findProduct ? (
        <div className="flex">
          <div className="">
            <div className="flex gap-2">
              <div className="left">
                {
                    findProduct.image.map((obj,index)=>(
                        <img onClick={()=>setImage(obj)} className="w-20 mb-2" src={obj} />
                    ))
                }
              </div>
              <div className="right">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <h1>{findProduct.name}</h1>
            <h1>{findProduct.description}</h1>
            <h1>${findProduct.price}</h1>
            {findProduct.sizes.map((obj, index) => (
              <button className="p-2 cursor-pointer">{obj}</button>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-4xl">Loading...</h1>
      )}
    </div>
  );
}

export default Product;
