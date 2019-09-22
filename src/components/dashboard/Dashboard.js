import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="dashboard container">
            <div className="row p-5">
                <div className="col-md-6">
                    <NavLink to="/transfer">Transfer</NavLink>
                </div>
                <div className="col-md-6">
                    <NavLink to="/request">Request</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Dashboard