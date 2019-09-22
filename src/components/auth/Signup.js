import React, { useState } from 'react'

const Signup = () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        event.persist()
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs)
    }
    console.log(inputs)
    return (
        <div className="container">
            <form onSubmit={handleSubmit} style={{width: 'max-content', margin: '0 auto'}}>
                <h5>Sign up</h5>
                <div className="form-group">
                    <input onChange={handleChange} type="text" name="fullname" className="form-control" placeholder="Full name"></input>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} type="email" name="email" className="form-control" placeholder="Email"></input>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} type="text" name="username" className="form-control" placeholder="Username"></input>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} type="password" name="password" className="form-control" placeholder="Password"></input>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Log in</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
