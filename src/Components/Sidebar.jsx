// src/Components/Sidebar.jsx
import React, { useState, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { PhoneNumberContext } from './PhoneNumberContext'; // Import the context

function Sidebar({ selectedPage, setSelectedPage }) {
  const [activePage, setActivePage] = useState(selectedPage || 'popular');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Consume the context
  const { phoneNumber } = useContext(PhoneNumberContext);

  const handlePageSelect = (page) => {
    setActivePage(page);
    setSelectedPage(page);
    setIsSidebarOpen(false); // Close the sidebar after selecting a page
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative lg:flex lg:w-1/4">
      {/* Toggle button for smaller screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-2 left-2 z-50 text-blue-700 rounded-md focus:outline-none p-2"
      >
        {!isSidebarOpen ? <FaBars size={24} /> : null}
      </button>

      {/* Sidebar container */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100 p-4 shadow-md transition-transform duration-300 z-40 lg:relative lg:transform-none lg:block ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-3/4 sm:w-1/2 lg:w-full`}
      >
        {/* Close icon inside the sidebar on the right side */}
        {isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-blue-700"
          >
            <FaTimes size={24} />
          </button>
        )}

        {/* Display the phone number above Plan Category */}
        {phoneNumber && (
          <div className="mb-4 p-2 bg-blue-100 rounded-md">
            <p className="text-blue-700 font-semibold">Phone Number:</p>
            <p className="text-blue-700">{phoneNumber}</p>
          </div>
        )}

        <h2 className="text-lg font-semibold mb-4">Plan Category</h2>
        <ul>
          <li
            onClick={() => handlePageSelect('popular')}
            className={`py-2 px-4 rounded-md cursor-pointer font-bold transition-colors duration-200 ${
              activePage === 'popular'
                ? 'bg-blue-700 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Popular Plans
          </li>
          <li
            onClick={() => handlePageSelect('create')}
            className={`mt-2 py-2 px-4 rounded-md cursor-pointer font-bold transition-colors duration-200 ${
              activePage === 'create'
                ? 'bg-blue-700 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Create Plan
          </li>
        </ul>
      </div>

      {/* Overlay for smaller screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
