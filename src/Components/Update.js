import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Button,Form,Checkbox } from 'semantic-ui-react';
export const Update = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckBox] = useState(false);
  const [id, setID] = useState(null);

  useEffect(()=>{

    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setCheckBox(localStorage.getItem('checkbox'));

  },[])

  const updateApiData =()=>{
      console.log(id);
    axios.put(`https://63c79a5f5c0760f69aba42b4.mockapi.io/crud-app/${id}`,{
      firstName,
      lastName,
      checkbox
    })
  }


  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' onChange={(e)=>{
            setFirstName(e.target.value)
          }} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' onChange={(e)=>{
            setLastName(e.target.value)
          }} />
        </Form.Field>
        <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' 
        onChange={(e)=> setCheckBox(!checkbox)} />
        </Form.Field>
        <Button type='submit' onClick={updateApiData}>Update</Button>
      </Form>
    </div>
  )
}
