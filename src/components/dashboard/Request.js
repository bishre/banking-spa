import React from 'react'
import { NavLink } from 'react-router-dom'
import './Dashboard.css'

const Request = () => {
    return (
        <div className="form-group request-form">
            <NavLink to="/transfer" className="d-block">Transfer</NavLink>
            <form>
                <div className="form-group">
                    <h4>Request</h4>
                    <input type="text" className=""></input>
                    <span style={{fontSize: '2rem'}}>€</span>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Next</button>
                </div>
            </form>
        </div>
    )
}

export default Request