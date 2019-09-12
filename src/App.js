import React from 'react';
// import logo from './logo.svg';
import './App.css';

import ErrorComponent from "../src/pages/error"
import HomeComponent from "../src/pages/home"
import RoomsComponent from "../src/pages/rooms"
import SingleRoomsComponent from "../src/pages/singleRooms"

import NavbarComponent from "../src/components/navbar"

import { Route,Switch,Link} from "react-router-dom"

function App() {
  return (
    <div className="App">

      

        <NavbarComponent></NavbarComponent>
        <Switch>
        <Route exact path="/"  component={HomeComponent}></Route>

<Route  exact path="/home"  component={HomeComponent}></Route>

<Route  exact path="/rooms" component={RoomsComponent}></Route>
<Route  exact path="/rooms/:slug" component={SingleRoomsComponent}></Route>
<Route    component={ErrorComponent}></Route>
</Switch>
     
    </div>
  );
}

export default App;
