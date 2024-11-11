// src/Components/Prepaid.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PhoneNumberContext } from './PhoneNumberContext'; // Import the context

function Prepaid() {
  const [isMobileSelected, setIsMobileSelected] = useState(true);
  const [isPrepaid, setIsPrepaid] = useState(true); // Default to Prepaid
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Consume the context
  const { phoneNumber, setPhoneNumber } = useContext(PhoneNumberContext);

  const handlePrepaid = () => {
    navigate("/");
    setIsPrepaid(true);
  };

  const handlePostpaid = () => {
    navigate("/postpaid");
    setIsPrepaid(false);
  };

  const handleProceed = () => {
    // Check if the phone number is valid (Indian mobile number format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (phoneRegex.test(phoneNumber)) {
      setError("");
      navigate("/plans"); // Navigate to PlanControl page
    } else {
      setError("Please enter a valid 10-digit phone number starting with 6-9.");
    }
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

        {/* Phone Number Input */}
        <div className="flex items-center bg-blue-700 rounded-full px-3 md:px-4 py-2 w-full">
          <input
            type="text"
            placeholder="+91 Jio Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)} // Update context state
            className="bg-transparent text-gray-200 flex-grow outline-none placeholder-gray-300"
          />
          <button
            onClick={handleProceed}
            className="bg-white text-blue-700 px-3 py-1 md:py-2 md:px-4 rounded-full font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors duration-300"
          >
            Proceed
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
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

export default Prepaid;
