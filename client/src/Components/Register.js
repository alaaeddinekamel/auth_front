import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../Redux/Actions/AuthActions';

const Register = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister=(a)=>{
        a.preventDefault()
        dispatch(register({name,email,password},navigate))
    }
    const mahmoudEgaleError = useSelector(state => state.ErreurReducer)
  return (
    <Form>

    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder={mahmoudEgaleError.filter((el)=>el.msg.includes('email')).map((el,i,t)=>el.msg)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder={mahmoudEgaleError.length == 0 ? "ala" : mahmoudEgaleError.filter((el)=>el.msg.includes('password')).map((el,i,t)=>el.msg)} />
        <h4 style={{color:'red'}}>{ mahmoudEgaleError.filter((el)=>el.msg.includes('password')).map((el,i,t)=>el.msg)}</h4>
      </Form.Group>

      <Button onClick={(e)=>handleRegister(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Register