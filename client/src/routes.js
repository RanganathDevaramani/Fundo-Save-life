
import React from 'react';
import { Route, Switch } from "react-router-dom"

import Home from "./Users/Home/Home"
import Register from "./authentication/Register"
import Login from "./authentication/Login"
import Logout from "./authentication/Logout"

import MyAccount from "./Users/My account/MyAccount"
import NotFound from "./notFound"
// import { Container } from './styles';

export default function Routes(){
  return (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/logout" component={Logout} exact/>
        <Route path="/myaccount" component={MyAccount} exact/>
        <Route component={NotFound} />
    </Switch>
  );
}

