import React, { useRef } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login({onRegisterClick}) {

  let emailRef = useRef();
  let passwordRef = useRef();

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let handlelogin = async () => {

    let dataToSend = new FormData();

    dataToSend.append('email', emailRef.current.value);
    dataToSend.append('password', passwordRef.current.value);

    let response = await axios.post('/validateUser', dataToSend);

    console.log(response);

    if(response.data.status === 'success'){

      localStorage.setItem('token', response.data.token);
      navigate('/');
      dispatch({type: 'login', data: response.data.data});
    }else{
      alert(response.data.msg);
    }
    
  }
  
  return (
    <div>
      <hr></hr>
        <form>
        <div className="input-container">
  <input type="text" name="text" className="input" placeholder="Enter Email" ref={emailRef}/>
  <div className="highlight"></div>
</div>
<div className="input-container">
  <input type="text" name="text" className="input" placeholder="Enter Password" ref={passwordRef}/>
  <div className="highlight"></div>
</div>
        <div>
            <button className='button' type='button' onClick={handlelogin}>Login</button>
            <p className='link' onClick={onRegisterClick}>New Customer? Create your account</p>
        </div>
        </form>
    </div>
  )
}

export default Login