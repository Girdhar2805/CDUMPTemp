import React from 'react';
// react functions based component
import MainContainer from './components/Container/MainContainer';
import MyFooter from './components/Footer/MyFooter';
import MyHeader from './components/Header/MyHeader';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    
  } from "react-router-dom";

import AboutUs from './/pages/AboutUs'
import Help from './/pages/Help'
import LandingPage from './/pages/LandingPage'
import Organization from './/pages/Organization'
import Profile from './/pages/Profile'


function App(){
    return(
        <>
        <Router>
            <div id= 'myWrapperContainer'>
                <MyHeader/>
                <div>
                <Switch>
                  <Route  exact path="/"  component = {LandingPage} />
                  <Route  path="/Help" exact component = {Help} />
                  <Route  path="/Aboutus"exact component = {AboutUs} />
                  <Route  path="/Organization" exact component = {Organization} />
                  <Route  path="/SignUp" exact component = {Profile} />
                </Switch>
                </div>
                <MyFooter/>
            </div>

         </Router> 
        </>
    );
}
export default App;