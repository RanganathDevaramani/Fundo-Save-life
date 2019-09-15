import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom"

import AppBar from "./AppBar"
import Footer from "./Footer"
import Routes from "./routes"

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <AppBar />
          <Link to="/">Home</Link>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign up</Link>
          <Link to="/logout">Log out</Link>
          <Link to="/myaccount">My Account</Link>
        </div>
        <Routes />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
