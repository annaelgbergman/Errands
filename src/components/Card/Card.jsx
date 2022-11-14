import React, { useState } from 'react'
import '../Card/Card.css'

const Card = ({issue}) => {
  const [errandStart, setErrandStart] = useState(false)
  
  return (
    <div className='container'>
      <div className='Card'>
        <div className='d-flex'>
          <h2 className='title'>{issue.subject}</h2>
          {
            !errandStart &&
            <button className='activate-btn' onClick={() => setErrandStart(true)}>Activate</button>
          }
        </div>

          <p className='time-date-email'>{issue.created.slice(11,16)} | {issue.created.slice(0,10)} | {issue.customer.email}</p>
          <p className='info-text'>{issue.description}</p>
       
        <div className='cs-group'>
          <p>Case status: </p>

          { 
            !errandStart
            ?<p className='cs-status cs-status-inactive'>{issue.status.status}</p>
            :<p className='cs-status cs-status-active'>Active</p>
          }
        </div>

      </div>
    </div>
  )
}

export default Card