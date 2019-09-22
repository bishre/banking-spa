import React, { useState } from 'react'

const Pay = () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        event.persist()
        setInputs(inputs => ({...inputs, date: new Date(), [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs)
    }
    console.log(inputs)
    return (
        <div className="container">
            <form onSubmit={handleSubmit} style={{width: 'max-content', margin: '0 auto'}}>
                <h5>Make a Payment</h5>
                <div className="form-group">
                    <input onChange={handleChange} type="text" name="account holder" className="form-control" placeholder="account holder"></input>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} type="text" name="account number" className="form-control" placeholder="account number"></input>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} type="text" name="amount" className="form-control" placeholder="amount in €"></input>
                </div>
                <div className="form-group">
                    <textarea onChange={handleChange} name="message" className="form-control" placeholder="message"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default Pay
