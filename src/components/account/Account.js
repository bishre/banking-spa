import React from 'react'
import { NavLink } from 'react-router-dom'
import Activity from './Activity'

const Account = () => {
    const transactions = [
        {id:1, date: '12.9.2019', time: '14:23', recipient: 'John Doe', amount: '50€', accountNumber: '111', message: 'party'},
        {id:2, date: '15.9.2019', time: '17:05', recipient: 'Jane Doe', amount: '20€', accountNumber: '222', message: 'borrow'},
        {id:3, date: '16.9.2019', time: '09:16', recipient: 'Holly Doe', amount: '300€', accountNumber: '333', message: 'rent'}
    ]
    return (
        <div>
            <Activity/>
            <h1>Transactions</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Recipient</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction =>
                        <tr>
                            <td>{transaction.date}</td>
                            <td>
                                <NavLink
                                to={`accountdetails/${transaction.id}`}
                                >{transaction.recipient}</NavLink>
                            </td>
                            <td>{transaction.amount}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Account