import React, { useState } from 'react';
import CreatePlan from './CreatePlan';
import Planpage from './Planspage';
import Sidebar from './Sidebar';

function PlanControl() {
  const [selectedPage, setSelectedPage] = useState('popular');

  return (
    <div className="flex">
      <Sidebar setSelectedPage={setSelectedPage} />
      
      {/* Right-side content area with full width */}
      <div className="flex-grow p-4">
        {selectedPage === 'popular' && <Planpage />}
        {selectedPage === 'create' && <CreatePlan />}
      </div>
    </div>
  );
}

export default PlanControl;
