import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import Cheezies from './Cheezies';
import Water from './Water';
import SwedishFish from './SwedishFish';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
