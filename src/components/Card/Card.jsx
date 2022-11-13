import React, { useState } from 'react'
import '../Card/Card.css'

const Card = () => {

  const [errandStart, setErrandStart] = useState(false)
  
  return (
    <div className='container'>
      <div className='Card'>
        <div className='d-flex'>
          <h2 className='title'>Rubrik</h2>
          {
            !errandStart &&
            <button className='activate-btn' onClick={() => setErrandStart(true)}>Activate</button>
          }
        </div>

          <p className='time-date-email'>16:45 | 2022-10-18 | anna@live.se</p>
          <p className='info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, expedita nobis consequuntur aliquid quod voluptatum.</p>
       
        <div className='cs-group'>
          <p>Case status: </p>

          { 
            !errandStart
            ?<p className='cs-status cs-status-inactive'>Inactive</p>
            :<p className='cs-status cs-status-active'>Active</p>
          }
        </div>

      </div>
    </div>
  )
}

export default Card