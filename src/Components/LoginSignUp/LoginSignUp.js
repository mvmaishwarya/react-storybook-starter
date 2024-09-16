import React, { useState } from 'react'
import PropTypes from "prop-types"
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignUp = ({name, email, password, onSignUpClick, onLoginClick}) => {

  const [action, setAction] = useState('SignUp')
  
  return (
    <div className='container'>
        <div className='header'>
        <div className='radio'>
            <input type="radio" id="SignUp" name="authenticate" value="SignUp" checked ={action === 'SignUp'} onChange={() => setAction('SignUp')}/>
            <label className='text' for="SignUp">Sign Up</label>
            <input type="radio" id="Login" name="authenticate" value="Login" checked={action === 'Login'} onChange={() => setAction('Login')}/>
            <label className='text' for="Login">Login</label>
        </div>
          <div className='underlineWide'></div>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action === 'Login' ? <div /> : 
            <div className='input'>
                <img src={user_icon} alt='' />
                <input type='text' placeholder='Name' value={name}/>
            </div>
            }
            <div className='input'>
                <img src={email_icon} alt='' />
                <input type='email' placeholder='Email ID' value={email}/>
            </div>
            <div className='input'>
                <img src={password_icon} alt='' />
                <input type='password' placeholder='Password' value={password}/>
            </div>
        </div>
        {action === 'SignUp' ? <div /> : 
        <div className='forgot-password'>Forgot Password? <span>Click Here</span></div> }
        <div className='submit-container'>
            { action === 'SignUp' && <button className='submit' onClick={onSignUpClick}>Sign Up</button> }
            { action === 'Login' && <button className='submit' onClick={onLoginClick}>Login</button> }
        </div>
    </div>
  )
}

LoginSignUp.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    onSignUpClick: PropTypes.func,
    onLoginClick: PropTypes.func,
  }

export default LoginSignUp