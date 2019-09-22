import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/account" className="nav-link">Account <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/pay" className="nav-link">Pay</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/card" className="nav-link">Cards</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/settings" className="nav-link">Settings</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link">Log out</NavLink>
                </li>
            </ul>
    )
}

export default SignedInLinks