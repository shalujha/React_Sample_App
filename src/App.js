import React from "react";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import User from "./Users/pages/newUser";
import Place from "./Places/Pages/newPlace";
import Sidebar from "./Shared/components/sidebar";
import UserPlace from "./Places/Pages/userPlace";
function App() {
  return (
    <Router>
      
      <Switch>
      <Route path="/" exact>
      <Sidebar/>
       <User/>
      </Route>
      <Route path="/places/new">
      <Place/>
      </Route>
      <Route path="/:userId/places">
<UserPlace/>
      </Route>
     <Redirect to="/">
       </Redirect> 
       </Switch>
    </Router>
    );
}

export default App;
