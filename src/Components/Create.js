import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

const Create = () => {
  
    const [FirstName, setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [checkbox,setCheckBox]=useState('');


    const postData = () => {
        axios.post(`https://63c79a5f5c0760f69aba42b4.mockapi.io/crud-app`, {
            FirstName,
            LastName,
            checkbox
        })

        console.log(FirstName,LastName,checkbox)
}


    return(
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='FirstName'
      onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='LastName'
      onChange={(e)=>setLastName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckBox(!checkbox)}/>
    </Form.Field>
    <Button type='submit' onClick={postData}>Submit</Button>
  </Form>
)
    }

export default Create;