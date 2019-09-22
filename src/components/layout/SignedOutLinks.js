import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">Sign up <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link">Log in</NavLink>
                </li>
            </ul>
    )
}

export default SignedOutLinks