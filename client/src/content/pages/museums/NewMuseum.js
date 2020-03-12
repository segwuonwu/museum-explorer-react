import React, { useState } from 'react';
import { useAddMuseum } from '../../../CustomHooks'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default function NewMuseum(props) {
  const sendToDb = () => {
    console.log(inputs);
    axios.post(`${process.env.REACT_APP_SERVER_URL}/museums`, inputs)
      .then(response => {
        if (response.data.message) {
          console.log(response.data.err)
          setError(response.data.message)
        } else {
          setNewMuse(response.data)
        }
    }).catch(err => {
      setError(err.message)
      console.log(err)
    })
  }

  const { inputs, handleInputChange, handleSubmit } = useAddMuseum(sendToDb);
  const [NewMuse, setNewMuse] = useState(null);
  const [error, setError] = useState(null);
  
  if(NewMuse) return <Redirect to={`/museums/${NewMuse._id}`} />

  return (
    <div>
      <h1>NEW MUSEUM STUB</h1>
      <form onSubmit={handleSubmit}>
        <label>Museum Name: </label>
        <input type="text" name="name" onChange={handleInputChange} value={inputs.name} required />

        <label>City: </label>
        <input type="text" name="city" onChange={handleInputChange} value={inputs.city}/>

        <label>Country: </label>
        <input type="text" name="country" onChange={handleInputChange} value={inputs.country} />

        <label>Museum Image Url: </label>
        <input type="text" name="image" onChange={handleInputChange} value={inputs.image}/>
        
        <button type='submit'>Add Museum</button>
      </form>
    </div>
  )
}