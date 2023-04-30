import React, { useState } from 'react';
import data from 'src/data/db.json';


function App() {
    const [tours, setTours] = useState(data);
  
    return (
      <div>
        {tours.map((tour) => (
          <div key={tour.id}>
            <h2>{tour.name}</h2>
            <img src={tour.image} alt={tour.name} />
          </div>
        ))}
      </div>
    );
  }
  
  export default App;