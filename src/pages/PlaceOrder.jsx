import React from "react";
import { assets } from "../assets/assets/assets";
import CartTotal from "../components/CartTotal";

function PlaceOrder() {
  return (
    <div className="px-[7vw] flex gap-4 my-24">
      <div className="left ">
        <h1></h1>
        <div className="form">
          <form action="" className="flex flex-col gap-4 w-full max-w-[480px]">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="FirstName"
                className="w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
              <input
                type="text"
                placeholder="LastName"
                className=" w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
            </div>
            <input
              type="text"
              placeholder="Email"
              className="px-3.5 py-1.5 border rounded border-gray-300 w-full"
            />
            <input
              type="text"
              placeholder="Street"
              className="px-3.5 py-1.5 border rounded border-gray-300 w-full"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="State"
                className="w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
              <input
                type="text"
                placeholder="City"
                className=" w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="ZipCode"
                className="w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
            </div>
            <input
              type="text"
              placeholder="PhoneNumber"
              className="px-3.5 py-1.5 border rounded border-gray-300 w-full"
            />
          </form>
        </div>
      </div>
      <div className="right">
        <div className="">
            <CartTotal />
        </div>
        <div className="Payment">
            <h1>Payment Method</h1>
           <div className="flex gap-4">
             <div className="flex items-center gap-3 border border-gray-300 py-2 px-3">
                <p className="min-w-3.5 h-3.5 rounded-full border border-gray-300 "></p>
                <img className="h-5" src={assets.razorpay_logo} alt="" />
            </div>
             <div className="flex items-center gap-3 border border-gray-300 py-2 px-3">
                <p className="min-w-3.5 h-3.5 rounded-full border border-gray-300 bg-green-500"></p>
                <img className="h-5" src={assets.stripe_logo} alt="" />
            </div>
             <div className="flex items-center gap-3 border border-gray-300 py-2 px-3">
                <p className="min-w-3.5 h-3.5 rounded-full border border-gray-300 "></p>
               <p className="uppercase font-medium text-sm">cash on delivery</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
