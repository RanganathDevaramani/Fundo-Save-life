import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import { Route, Switch } from "react-router-dom"

import Home from "./Users/Home/Home"
import Register from "./authentication/Register"
import Login from "./authentication/Login"
import Logout from "./authentication/Logout"

import MyAccount from "./Users/My account/MyAccount"
import NotFound from "./notFound"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: !!localStorage.getItem('token')
    }
  }

  handleIsAuthenticated = (bool) => {
    this.setState(() => ({
      isAuthenticated: bool
    }))
  }

  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        {
          !this.state.isAuthenticated && (
            <div>
              <Link to="/login">Sign In</Link>
              <Link to="/register">Sign up</Link>
            </div>
          )
        }
        {
          this.state.isAuthenticated && (
            <div>
              <Link to="/logout">Log out</Link>
              <Link to="/myaccount">My Account</Link>
            </div>
          )
        }

        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path='/logout' render={(props) => <Logout  {...props} handleIsAuthenticated={this.handleIsAuthenticated}/> }></Route>
          <Route path='/login' render={(props) => <Login  {...props} handleIsAuthenticated={this.handleIsAuthenticated}/> }></Route>
          <Route path='/myaccount' render={(props) => <MyAccount  {...props} handleIsAuthenticated={this.handleIsAuthenticated}/> }></Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
