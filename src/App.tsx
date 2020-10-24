import React from 'react';
import './App.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Dollars from './Component/Dollars.component'
import Dollars2 from './Component/Dollar2.component'
import Change from './Component/Change.component'
import Banner from './Component/Header.component'
import Wallpaper from './Component/Wallpaper.component'
import Euros from './Component/Euros.component';
import Euros2 from  './Component/Euros2.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
        <Banner/>
        <Switch>
                  <Route path="/setup" component={Change}/>
                  <Route path="/dolar2" component={Dollars2}/>
                  <Route path="/euros1" component={Euros}/>
                  <Route path="/euros2" component={Euros2}/>
                  <Route path="/wallpaper" component={Wallpaper}/>
                 <Route path="/" component={Dollars}/>
                 
                 
          </Switch>
          <Switch>
          
                 
          </Switch>
         
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
