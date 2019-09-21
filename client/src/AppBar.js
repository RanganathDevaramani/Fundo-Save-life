import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class AppBar extends Component {

    render() {
        console.log(this.props.isAuthenticated)
        return (
            <div>
                <Link to="/">Home</Link>
                {
                    this.props.isAuthenticated && (
                        <div>
                            <Link to="/logout">Log out</Link>
                            <Link to="/myaccount">My Account</Link>
                        </div>
                    )
                }
                {
                    !this.props.isAuthenticated && (
                        <div>
                            <Link to="/login">Sign In</Link>
                            <Link to="/register">Sign up</Link>
                        </div>
                    )
                }

            </div>
        )
    }
}
