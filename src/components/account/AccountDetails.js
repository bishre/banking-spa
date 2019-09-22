import React from 'react'

const AccountDetails = (props) => {
    console.log(props)
    return (
        <div>
            account details for {props.match.params.id}
        </div>
    )
}

export default AccountDetails