import React,{useCallback, useState} from "react";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import User from "./Users/pages/newUser";
import Place from "./Places/Pages/newPlace";
import Sidebar from "./Shared/components/sidebar";
import UserPlace from "./Places/Pages/userPlace";
import UpdatePlace from "./Places/Pages/updatePlace";
import Auth from "./Places/Pages/Auth";
import Register from "./Places/Pages/Register";
import {AuthContext} from "./context/auth-context";
import IntroNavbar from "./Places/Pages/IntroNavbar";
function App() {
  const[isLoggedin,setIsLoggedIn]=useState(false);
  const login=useCallback(function(){
    setIsLoggedIn(true);
  },[]);
  const logout=useCallback(function(){
    setIsLoggedIn(false)
  },[]);

  return (
    <AuthContext.Provider value={{isLoggedin:isLoggedin,login:login,logout:logout}}>
    <Router>
      <Switch>
      <Route path="/" exact>
      <IntroNavbar/>
       <User/>
      </Route>
      <Route path="/auth">
      <IntroNavbar/>
      <Auth/>
      </Route>
      <Route path="/register">
      <IntroNavbar/>
        <Register/>
      </Route>
      
      <Route path="/places/new">
      <IntroNavbar/>
      <Place/>
      </Route>
      <Route path="/places/:placeId">
      <IntroNavbar/>
      <UpdatePlace/>
      </Route>
      <Route path="/:userId/places">
      <IntroNavbar/>
      <UserPlace/>
      </Route>
     <Redirect to="/">
       </Redirect> 
       </Switch>
    </Router>
    </AuthContext.Provider>
    );
}
export default App;
