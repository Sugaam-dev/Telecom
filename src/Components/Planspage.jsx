import React from 'react';
import plansData from '../plansData.js'

function Planpage() {
    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 ml-8">Popular Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plansData.map(plan => (
            <div key={plan.id} className="bg-blue-50 p-4 rounded-lg shadow-md">
              {plan.title && <span className="text-sm font-semibold bg-green-500 text-white py-1 px-2 rounded-md">{plan.title}</span>}
              <h2 className="text-2xl font-bold mt-2">{plan.price}</h2>
              <p className="text-gray-600 text-sm">{plan.validity}</p>
              <p className="text-gray-600 text-sm">{plan.data}</p>
              <div className="mt-2">
                <span className="text-blue-500 text-xs font-semibold">{plan.highlight}</span>
              </div>
              <div className="mt-4">
                {plan.subscriptions.map((sub, index) => (
                  <span key={index} className="text-sm text-gray-500 mr-1">{sub}</span>
                ))}
              </div>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md w-full">Recharge</button>
            </div>
          ))}
        </div>
      </div>
      );
}

export default Planpage;
