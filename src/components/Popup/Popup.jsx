import React, { useState } from 'react'
import './Popup.css'

const Popup = ({handleClose}) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phonenNmber, setPhoneNumber] = useState('')

  
  const handleSubmit = async (e) => {
    e.preventDefault()


    const json = JSON.stringify({firstName, lastName, email, phonenNmber})
    
    const res = await fetch('https://localhost:7272/api/customers',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: json
    })
    console.log(await res.json())
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('')
  }

  return (
    <div className='popup-bg'>
      <div className='popup'>
        <div className='close-popup-btn'>
          <button className='btn-close' onClick={handleClose}><i className="fa-solid fa-xmark"></i></button>
        </div>
        <form onSubmit={handleSubmit} className='popup-form' id='myPopup'>
          <label htmlFor="firstName">First name:</label>
          <input type="text" id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/> 

          <label htmlFor="lastName">Last name:</label>
          <input type="text" id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>

          <label htmlFor="email">Email:</label>
          <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>

          <label htmlFor="phoneNumber">Phone number:</label>
          <input type="text" id='phonenNmber' value={phonenNmber} onChange={(e) => setPhoneNumber(e.target.value)}/>

          <div className='btn-right'>
          <button type='submit' className='btn-secondary'>Submit</button> 
          </div>
        </form>
      </div>
  </div>
  )
}

export default Popup