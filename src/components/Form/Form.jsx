import React, { useState } from 'react'
import { useEffect } from 'react'
import Popup from '../Popup/Popup'
import './Form.css'

const Form = () => {
  const [customers, setCustomers] = useState([])
  const [customerId, setCustomerId] = useState(0)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [email, setEmail] = useState('')

  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://localhost:7272/api/Customers')
      setCustomers(await res.json())
    }

    fetchData()
  }, [])

  const handleClose = () => {
    setShowModal(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(customerId !== 0) {
      const json = JSON.stringify({ title, description, customerId })  // ADD EMAIL IF YOU WANT IT HERE

      const res = await fetch('https://localhost:7272/api/Issues',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: json
      })
      console.log(await res.json())
      setTitle('')
      setDescription('')
      setCustomerId(0)
      // setEmail('')
      
    }
  }

  return (
    <div>
        <div className="container">

            <form className='form-control' onSubmit={handleSubmit}>
              <div>
                <button className='btn-show' onClick={() => setShowModal(true)}>Add new customer</button>
              </div>
              
              <div className='select-group'>
                <select value={customerId} onChange={(e) => setCustomerId(e.target.value)}>
                    <option value={0}>-- Customer --</option>
                    {customers.map(customer => <option key={customer.id} value={customer.id}>{customer.firstName} {customer.lastName}</option>)}
                </select>
              </div> 

              
                <label htmlFor="title" className='label'>Title</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="textArea" className='label'>Description</label>
                <textarea type="text" name="textArea" rows="10" className='text-area' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                {/* <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/> */}

                <div className='btn-right'>
                    <button type='submit' className='btn-secondary'>Add</button>  
                </div>
            </form>
        </div>
        { showModal && <Popup handleClose={handleClose}/> }
    </div>
  )
}

export default Form