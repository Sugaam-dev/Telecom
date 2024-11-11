// src/App.jsx
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Prepaid from './Components/Prepaid';

import PlansPage from './Components/Planspage';
import PlanControl from './Components/PlanControl';

import { PhoneNumberProvider } from './Components/PhoneNumberContext'; // Import the Provider
import Postpaid from './Components/PostPaid';

function App() {
  return (
    <PhoneNumberProvider>
      <BrowserRouter>
        <div className="flex">
          {/* Sidebar Component */}
       

          {/* Main Content Area */}
          <div className="flex-1">
            <Routes>
              <Route path='/' element={<Prepaid />} />
              <Route path='/postpaid' element={<Postpaid/>} />
              <Route path='/plans' element={<PlanControl />} />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </PhoneNumberProvider>
  );
}

export default App;
