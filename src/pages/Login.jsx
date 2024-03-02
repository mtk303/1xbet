import React from 'react'
import '../assets/css/auth.css';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
   <div className='authForm my-5'>
     <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Account ID</Form.Label>
        <Form.Control type="text" placeholder="Account ID..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="text" placeholder="Phone No..." />
      </Form.Group>
       
    </Form>
    <div className='text-center'>
        <button className="authBtn">Login</button>
    </div>
   </div>
  )
}

export default Login
