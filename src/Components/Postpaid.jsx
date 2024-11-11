// Postpaid.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Postpaid() {
  const [isMobileSelected, setIsMobileSelected] = useState(true);
  const [isPrepaid, setIsPrepaid] = useState(false); // Set to Postpaid by default

  const navigate = useNavigate();

  const handlePrepaid = () => {
    navigate("/");
    setIsPrepaid(true);
  };

  const handlePostpaid = () => {
    // Since this is the Postpaid component, setIsPrepaid should already be false
    // This ensures idempotency
    navigate("/postpaid");
    setIsPrepaid(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get set, connect</h1>

      {/* Toggle Tabs for Mobile and Fiber */}
      <div className="flex space-x-4 md:space-x-8 mb-6">
        <button
          onClick={() => setIsMobileSelected(true)}
          className={`flex items-center px-2 md:px-4 py-2 border-b-2 ${
            isMobileSelected ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500"
          }`}
        >
          <span role="img" aria-label="mobile" className="mr-2">
            📱
          </span>
          Mobile
        </button>
        <button
          onClick={() => setIsMobileSelected(false)}
          className={`flex items-center px-2 md:px-4 py-2 border-b-2 ${
            !isMobileSelected ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500"
          }`}
        >
          <span role="img" aria-label="fiber" className="mr-2">
            📶
          </span>
          AirFiber/Fiber
        </button>
      </div>

      {/* Prepaid and Postpaid Options */}
      <div className="bg-blue-600 p-4 md:p-6 rounded-lg w-full max-w-md flex flex-col items-center">
        <div className="flex space-x-2 md:space-x-4 mb-4">
          <button
            onClick={handlePrepaid}
            className={`px-3 md:px-4 py-2 rounded-full transition-colors duration-300 ${
              isPrepaid
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-gray-300 hover:bg-blue-600"
            }`}
          >
            Prepaid
          </button>
          <button
            onClick={handlePostpaid}
            className={`px-3 md:px-4 py-2 rounded-full transition-colors duration-300 ${
              !isPrepaid
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-gray-300 hover:bg-blue-600"
            }`}
          >
            Postpaid
          </button>
        </div>

        {/* View Bill Summary */}
        <div className="flex justify-end w-full mb-4">
          <button className="text-white font-semibold hover:underline">
            View bill summary &rarr;
          </button>
        </div>

        {/* Phone Number and Amount Input */}
        <div className="flex flex-col w-full space-y-2 mb-4">
          <input
            type="text"
            placeholder="+91 Jio number"
            className="bg-blue-700 text-gray-200 rounded-full px-4 py-2 outline-none placeholder-gray-300 w-full"
          />
          <input
            type="text"
            placeholder="₹ Amount"
            className="bg-blue-700 text-gray-200 rounded-full px-4 py-2 outline-none placeholder-gray-300 w-full"
          />
        </div>

        {/* Pay Button */}
        <button className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors duration-300">
          Pay
        </button>
      </div>

      {/* Notice Text */}
      <div className="text-gray-500 text-sm mt-4 text-center max-w-md px-4">
        <p>Please note:</p>
        <p>1. This payment will be credited to your postpaid account and cannot be used for recharge or as your security deposit.</p>
        <p>2. Maximum payable amount is ₹10,000.</p>
      </div>

      {/* Links at the Bottom */}
      <div className="grid grid-cols-2 gap-2 md:flex md:space-x-4 mt-6 w-full max-w-md">
        <button className="border border-gray-300 text-blue-700 px-3 md:px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
          Get JioAirFiber
        </button>
        <button className="border border-gray-300 text-blue-700 px-3 md:px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
          Get Jio SIM - iActivate
        </button>
        <button className="border border-gray-300 text-blue-700 px-3 md:px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
          Get JioFiber
        </button>
        <button className="border border-gray-300 text-blue-700 px-3 md:px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
          Port to Jio
        </button>
      </div>
    </div>
  );
}

export default Postpaid;
