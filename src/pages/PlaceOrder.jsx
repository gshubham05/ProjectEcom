import React, { useState } from "react";
import { assets } from "../assets/assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";

function PlaceOrder() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    state: "",
    city: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onformChanger = (event) => {
    const { name, value } = event.target;
    console.log(name, " ", value);
    // [dynamicVariable]
    setFormData((i) => ({ ...i, [name]: value }));
  };

  return (
    <div className="px-[7vw] flex gap-4 my-10 mb-24">
      <div className="left ">
        <Title t1="Delivery" t2="Form" />
        <div className="form">
          <form action="" className="flex flex-col gap-4 w-full max-w-[480px]">
            <div className="flex gap-3">
              <input
                onChange={onformChanger}
                name="firstname"
                value={formData.firstname}
                type="text"
                placeholder="FirstName"
                className="w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
              <input
                onChange={onformChanger}
                name="lastname"
                value={formData.lastname}
                type="text"
                placeholder="LastName"
                className=" w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
            </div>
            <input
              onChange={onformChanger}
              name="email"
              value={formData.email}
              type="text"
              placeholder="Email"
              className="px-3.5 py-1.5 border rounded border-gray-300 w-full"
            />
            <input
              onChange={onformChanger}
              name="street"
              value={formData.street}
              type="text"
              placeholder="Street"
              className="px-3.5 py-1.5 border rounded border-gray-300 w-full"
            />
            <div className="flex gap-3">
              <input
                onChange={onformChanger}
                name="state"
                value={formData.state}
                type="text"
                placeholder="State"
                className="w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
              <input
                onChange={onformChanger}
                name="city"
                value={formData.city}
                type="text"
                placeholder="City"
                className=" w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
            </div>
            <div className="flex gap-3">
              <input
                onChange={onformChanger}
                name="zipcode"
                value={formData.zipcode}
                type="text"
                placeholder="ZipCode"
                className="w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
              <input
                onChange={onformChanger}
                name="country"
                value={formData.country}
                type="text"
                placeholder="Country"
                className="w-full px-3.5 py-1.5 border rounded border-gray-300"
              />
            </div>
            <input
              onChange={onformChanger}
              name="phone"
              value={formData.phone}
              type="text"
              placeholder="PhoneNumber"
              className="px-3.5 py-1.5 border rounded border-gray-300 w-full"
            />
          </form>
        </div>
      </div>
      <div className="right">
        <div className="">
          <Title t1="Cart" t2="Total" />
          <CartTotal />
        </div>
        <div className="Payment">
          <h1>Payment Method</h1>
          <div className="flex gap-4">
            <div className="flex items-center gap-3 border border-gray-300 py-2 px-3">
              <p className="min-w-3.5 h-3.5 rounded-full border border-gray-300 "></p>
              <img className="h-5" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setPaymentMethod("stripe")}
              className="flex items-center gap-3 border border-gray-300 py-2 px-3"
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border border-gray-300 ${paymentMethod == "stripe" ? "bg-green-500" : ""}`}
              ></p>
              <img className="h-5" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setPaymentMethod("cod")}
              className="flex items-center gap-3 border border-gray-300 py-2 px-3"
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border border-gray-300 ${paymentMethod == "cod" ? "bg-green-500" : ""}`}
              ></p>
              <p className="uppercase font-medium text-sm">cash on delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
