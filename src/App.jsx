import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Prepaid from './Components/Prepaid';
import Postpaid from './Components/PostPaid';
import PlansPage from './Components/Planspage';
import PlanControl from './Components/PlanControl';



function App() {
  return (
    <>


  
    
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Prepaid/>}/>
<Route path='/postpaid' element={<Postpaid/>}/>

<Route path='/plans' element={  <PlanControl/>}/>


    </Routes>
    </BrowserRouter>

</>

  );
}

export default App;
