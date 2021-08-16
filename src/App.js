import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import Cheezies from './Cheezies';
import Water from './Water';
import SwedishFish from './SwedishFish';


function App() {
  return (
    <div classname="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/cheezies">
          <Cheezies />
        </Route>
        <Route exact path="/water">
          <Water />
        </Route>
        <Route exact path="/swedishfish">
          <SwedishFish />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
