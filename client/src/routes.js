
import React from 'react';
import { Route, Switch } from "react-router-dom"

import Home from "./Users/Home/Home"
import Register from "./authentication/Register"
import Login from "./authentication/Login"
import Logout from "./authentication/Logout"

import MyAccount from "./Users/My account/MyAccount"
import NotFound from "./notFound"
// import { Container } from './styles';


class Routes extends React.Component{
  render(){
    return (
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path='/logout' render={(props) => <Logout  {...props} handleIsAuthenticated={this.props.handleIsAuthenticated}/> }></Route>
          <Route path='/login' render={(props) => <Login  {...props} handleIsAuthenticated={this.props.handleIsAuthenticated}/> }></Route>
          <Route path='/myaccount' render={(props) => <MyAccount  {...props} handleIsAuthenticated={this.props.handleIsAuthenticated}/> }></Route>
          <Route path="/register" component={Register} exact/>
          <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default Routes