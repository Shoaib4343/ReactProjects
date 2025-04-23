import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // assuming you're using react-router-dom
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart,total,delAllCart } = useContext(CartContext);
  const [err, seterr] = useState({});
  const [inputVal, setinputVal] = useState({
    fullname: "",
    streetAddress: "",
    city: "",
    postalCode: "",
  });
  const navigate = useNavigate()
  const handleInputVal = (e) => {
    setinputVal((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validation = {};
    if (!inputVal.fullname.trim()) {
      validation.fullname = "Full Name is required";
    }
    if (!inputVal.streetAddress.trim()) {
      validation.streetAddress = "Street Address is required";
    }
    if (!inputVal.city.trim()) {
      validation.city = "City is required";
    }
    if (!inputVal.postalCode.trim()) {
      validation.postalCode = "Postal Code is required";
    }
    if (Object.keys(validation).length === 0) {
      alert("Your Order is place");
      setinputVal({
        fullname: "",
        streetAddress: "",
        city: "",
        postalCode: "",
      });
      seterr({});
      delAllCart()
      navigate('/')
    } else seterr(validation);
  };
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Back to Shopping */}
        <div className="mb-6">
          <Link
            to="/shop"
            className="text-sm text-gray-600 hover:underline hover:text-gray-800 transition"
          >
            ← Back to Shopping
          </Link>
        </div>

        {/* Page Heading */}
        <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
          Checkout
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section: Cart Items */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              Your Items
            </h3>
            <div className="flex flex-col gap-6  overflow-y-auto ">
              {cart.map((curElm) => {
                return (
                  <div key={curElm.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={curElm.image}
                        alt={curElm.title}
                        className="w-20 h-20 object-cover rounded-xl "
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {curElm.title}
                        </p>
                        <p className="text-sm text-gray-500">Qty: {curElm.amount}</p>
                      </div>
                    </div>

                    <div className="font-semibold text-gray-700">Rs {parseFloat(curElm.price * curElm.amount).toFixed(2)}</div>
                  </div>
                );
              })}
              {/* Example Cart Item */}

              {/* Repeat cart items dynamically later */}
            </div>
          </div>

          {/* Right Section: Delivery Address + Order Summary */}
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            {/* Delivery Address */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-700">
                Delivery Address
              </h3>
              <form className="flex flex-col gap-5">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                    name="fullname"
                    value={inputVal.fullname}
                    onChange={handleInputVal}
                  />
                  {err.fullname && (
                    <p className="text-red-500 text-sm">{err.fullname}</p>
                  )}
                </div>

                {/* Street Address */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="Street and house number"
                    className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                    name="streetAddress"
                    value={inputVal.streetAddress}
                    onChange={handleInputVal}
                  />
                  {err.streetAddress && (
                    <p className="text-red-500 text-sm">{err.streetAddress}</p>
                  )}
                </div>

                {/* City */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                    name="city"
                    value={inputVal.city}
                    onChange={handleInputVal}
                  />
                  {err.city && (
                    <p className="text-red-500 text-sm">{err.city}</p>
                  )}
                </div>

                {/* Postal Code */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                    name="postalCode"
                    value={inputVal.postalCode}
                    onChange={handleInputVal}
                  />
                  {err.postalCode && (
                    <p className="text-red-500 text-sm">{err.postalCode}</p>
                  )}
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-700">
                Order Summary
              </h3>

              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-800">Rs {total}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-gray-800">Rs 200</span>
              </div>

              <div className="border-t border-gray-300 my-4"></div>

              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-lg font-bold text-green-600">
                  Rs {parseFloat(total+200).toFixed(2)}
                </span>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handleSubmitForm}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
