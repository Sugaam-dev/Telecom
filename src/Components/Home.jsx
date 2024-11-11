import React, { useState } from "react";
import Postpaid from "./PostPaid";
import Prepaid from "./Prepaid";


function Home() {
  const [isPrepaidSelected, setIsPrepaidSelected] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
 


      {/* Render Prepaid or Postpaid Component */}
      {isPrepaidSelected ? <Prepaid/> : <Postpaid/>}

      {/* Bottom Links */}
      <div className="flex space-x-4 mt-6">
        <button className="border border-gray-300 text-blue-700 px-4 py-2 rounded-full hover:bg-gray-100">
          Get JioAirFiber
        </button>
        <button className="border border-gray-300 text-blue-700 px-4 py-2 rounded-full hover:bg-gray-100">
          Get Jio SIM - iActivate
        </button>
        <button className="border border-gray-300 text-blue-700 px-4 py-2 rounded-full hover:bg-gray-100">
          Get JioFiber
        </button>
        <button className="border border-gray-300 text-blue-700 px-4 py-2 rounded-full hover:bg-gray-100">
          Port to Jio
        </button>
      </div>
    </div>
  );
}

export default Home;
