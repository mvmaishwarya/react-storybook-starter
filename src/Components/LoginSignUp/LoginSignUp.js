import React, { useState } from 'react'
import PropTypes, { oneOf } from "prop-types"
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

// Add theme and size css as props and create stories for that. 
// Add disabled button in case validation fails
// show how errors would look
// Explore visual tests and interactions

const LoginSignUp = ({theme, size, name, email, password, onSignUpClick, onLoginClick}) => {

  const [action, setAction] = useState('SignUp')
  
  return (
    <div className='container'>
        <div className='header'>
        <div className='radio'>
            <input type="radio" id="SignUp" name="authenticate" value="SignUp" checked ={action === 'SignUp'} onChange={() => setAction('SignUp')}/>
            <label className={`text ${theme}Color ${size}`} for="SignUp">Sign Up</label>
            <input type="radio" id="Login" name="authenticate" value="Login" checked={action === 'Login'} onChange={() => setAction('Login')}/>
            <label className={`text ${theme}Color ${size}`} for="Login">Login</label>
        </div>
          <div className={`underlineWide ${theme}Background`}></div>
          <div className={`text ${theme}Color ${size}`}>{action}</div>
          <div className={`underline ${theme}Background`}></div>
        </div>
        <div className='inputs'>
            {action === 'Login' ? <div /> : 
            <div className={`input ${size}Height`}>
                <img src={user_icon} alt='' />
                <input type='name' className={`${size}Input`} placeholder='Name' value={name}/>
            </div>
            }
            <div className={`input ${size}Height`}>
                <img src={email_icon} alt='' />
                <input type='email' className={`${size}Input`} placeholder='Email ID' value={email}/>
            </div>
            <div className={`input ${size}Height`}>
                <img src={password_icon} alt='' />
                <input type='password' className={`${size}Input`} placeholder='Password' value={password}/>
            </div>
        </div>
        {action === 'SignUp' ? <div /> : 
        <div className='forgot-password'>Forgot Password? <span>Click Here</span></div> }
        <div className='submit-container'>
            { action === 'SignUp' && <button className={`submit ${theme}Background ${size}Height`} onClick={() => onSignUpClick()}>Sign Up</button> }
            { action === 'Login' && <button className={`submit ${theme}Background ${size}Height`} onClick={() => onLoginClick()}>Login</button> }
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
    theme: PropTypes.oneOf(['red', 'blue']),
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
  }

export default LoginSignUp