import React from 'react'
import activity from '../../images/bank_activity.jpg'

const Activity = () => {
    return (
        <div className="jumbotron shadow-sm p-3 mb-5 bg-white rounded">
            <img src={activity} style={{width: '100%'}}></img>
        </div>
    )
}

export default Activity