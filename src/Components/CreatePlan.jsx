import React, { useState } from 'react';

const CreatePlan = () => {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setResponse(`Your plan details: ${inputValue}`);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Create Your Own Plan
      </h1>

      {/* Input and Button Container */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your plan details here..."
          className="flex-grow w-full py-3 px-4 rounded-full shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        />

        <button
          onClick={handleSubmit}
          className="w-full md:w-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>

      {/* Response Card */}
      {response && (
        <div className="mt-10 w-full max-w-md sm:max-w-lg md:max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Your Created Plan
          </h3>
          <p className="text-gray-600">{response}</p>
        </div>
      )}
    </div>
  );
};

export default CreatePlan;
