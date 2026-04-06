import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { ProductContext } from "../context/ProductContext";

function Product() {
  const { addToBag } = useContext(ProductContext);
  let { pid } = useParams();
  const [findProduct, setFindProduct] = useState(false);
  const [image, setImage] = useState(null);

  const [size, setSize] = useState("");
  const fetchProduct = () => {
    let d = products.find((i) => i._id == pid);
    if (d) {
      // console.log(d)
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
        <>
          <div className="flex">
            <div className="">
              <div className="flex gap-2">
                <div className="left">
                  {findProduct.image.map((obj, index) => (
                    <img
                      key={index}
                      onClick={() => setImage(obj)}
                      className="w-20 mb-2"
                      src={obj}
                    />
                  ))}
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
                <button
                  key={index}
                  onClick={() => setSize(obj)}
                  className={`${obj == size ? "border border-red-500" : ""} p-2 cursor-pointer`}
                >
                  {obj}
                </button>
              ))}
              <br />
              <button onClick={()=>addToBag(findProduct._id,size)} className="bg-green-600 hover:bg-green-800 text-white border-none px-4 py-2">
                Add to Bag
              </button>
            </div>
          </div>
          <div className="">
            {/* Related Products */}
            <h1>RElated PRoducts</h1>
            <RelatedProducts
              category={findProduct.category}
              subcategory={findProduct.subCategory}
            />
          </div>
        </>
      ) : (
        <h1 className="text-4xl">Loading...</h1>
      )}
    </div>
  );
}

export default Product;
