

import React from 'react';
import Home from '../src/components/home/home';
import data from '../src/data/db.json'
import TourDetails from './components/tourD/TourD'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import '../src/index.css';


function App() {
  return (


    <Router>
      <div>

        {/* <Home DATA = {data} /> */}
        <Routes>
          <Route path='/' element={<Home DATA={data} />} />
          <Route path='/city/:id' element={ <TourDetails DATA={data}   />} />
        </Routes>





      </div>
    </Router>
  );




}

export default App;
