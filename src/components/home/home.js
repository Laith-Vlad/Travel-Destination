

import React from 'react';
import header from 'src/components/header/header.js';
import footer from 'src/components/footer/footer.js';
import App from 'src/components/tours/Tours.js';

function render() {
  return (
    <div>
      <header />
      <App />
      <footer />
    </div>
  );
}

export default App;