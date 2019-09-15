import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class AppBar extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Sign In</Link>
                <Link to="/register">Sign up</Link>
                <Link to="/logout">Log out</Link>
                <Link to="/myaccount">My Account</Link>
            </div>
        )
    }
}
