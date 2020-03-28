import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Menu } from './components/menu';
import { Rotas } from './components/rotas';

function App() {
  return (
    <div>
      <Menu/>
      <Rotas/>
    </div>
  );
}

export default App;