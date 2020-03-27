import React from 'react';
import { Componente1} from './Componente1';
import { Componente2} from './Comp2';
import './teste.css';
import { Switch, Route} from'react-router-dom';

function App() {
  return (
    <Switch>
        <Route path='/exemplo1' component={Componente1}/>
        <Route path='/exemplo2' component={Componente2}/>
    </Switch>
  );
}

export default App;
