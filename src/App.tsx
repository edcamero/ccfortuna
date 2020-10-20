import React from 'react';
import './App.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Dollars from './Component/Dollars.component'
import Change from './Component/Change.component'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Switch>
                 <Route path="/" component={Dollars}/>
                 <Route path="/cambiar" component={Change}/>
                 
          </Switch>
          <Switch>
          
                 
          </Switch>
         
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
