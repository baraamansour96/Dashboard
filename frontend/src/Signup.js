import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import SignupValidation from './SignupValidation';
import axios from 'axios'

function Signup(){
   
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
  	const [Password, setPassword] = useState('');
    const [Message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
       event.preventDefault();
       axios.post('http://localhost:3002/signup', {Name,Email,Password})
         .then( response =>{
            setMessage(response.data.message)
    })
    .catch (error => {
        setMessage(error.response.data.message);
        console.error('Error creating account:', error);
      });
    }
   return(
    <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center bg-primary w-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign up</h2>
        <form  onSubmit={handleSubmit}>
        {Message && <div class="alert alert-warning" role="alert">{Message}</div>}
            <div className='mb-3'>
                 <label htmlFor="name"><strong>Name </strong></label>
                 <input type = "text" placeholder='Enter Name' onChange={e => setName(e.target.value)}  className='form-control rounded-0'/>
                 </div>
                 <div className='mb-3'>
                 <label htmlFor="email"><strong>Email </strong></label>
                 <input type="email" onChange={e => setEmail(e.target.value)}  placeholder='Enter Email' name='email' required className='form-control rounded-0'/>
                 </div>
            <div className='mb-3'>
                 <label htmlFor="password"><strong>Password</strong></label>
                 <input type = "password" placeholder='Enter Password' name='password' required
                onChange={e => setPassword(e.target.value)} className='form-control rounded-0'/>
            </div>
            <button type='submit' className='btn btn-success w-100 rounden-0'> Sign up </button>
            <Link to="/"  className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        </form>
        </div>
        </div>
    )
}

export default Signup