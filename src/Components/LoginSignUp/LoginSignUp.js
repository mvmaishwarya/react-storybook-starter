import React, { useState } from 'react'
import PropTypes, { oneOf } from "prop-types"
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignUp = ({color, backgroundColor, size, name, email, password, onSignUpClick, onLoginClick}) => {

  const [action, setAction] = useState('SignUp')
  
  return (
    <div className='container'>
        <div className='header'>
        <div className='radio'>
            <input type="radio" id="SignUp" name="authenticate" value="SignUp" checked ={action === 'SignUp'} onChange={() => setAction('SignUp')}/>
            <label className={`text ${size}`} style={color && { color }} for="SignUp">Sign Up</label>
            <input type="radio" id="Login" name="authenticate" value="Login" checked={action === 'Login'} onChange={() => setAction('Login')}/>
            <label className={`text ${size}`} style={color && { color }} for="Login">Login</label>
        </div>
          <div className={`underlineWide`} style = {backgroundColor && {backgroundColor}}></div>
          <div className={`text ${size}`} style={color && { color }}>{action}</div>
          <div className={`underline`} style = {backgroundColor && {backgroundColor}}></div>
        </div>
        <div className='inputs'>
            {action === 'Login' ? <div /> : 
            <div className={`input ${size}Height`}>
                <img src={user_icon} alt='' />
                <input data-testid='name' type='name' className={`${size}Input`} placeholder='Name' value={name}/>
            </div>
            }
            <div className={`input ${size}Height`}>
                <img src={email_icon} alt='' />
                <input data-testid='email' type='email' className={`${size}Input`} placeholder='Email ID' value={email}/>
            </div>
            <div className={`input ${size}Height`}>
                <img src={password_icon} alt='' />
                <input data-testid='password' type='password' className={`${size}Input`} placeholder='Password' value={password}/>
            </div>
        </div>
        {action === 'SignUp' ? <div /> : 
        <div className='forgot-password'>Forgot Password? <span>Click Here</span></div> }
        <div className='submit-container'>
            { action === 'SignUp' && <button className={`submit ${size}Height`} style = {backgroundColor && {backgroundColor}} onClick={onSignUpClick}>Sign Up</button> }
            { action === 'Login' && <button className={`submit ${size}Height`} style = {backgroundColor && {backgroundColor}} onClick={onLoginClick}>Login</button> }
        </div>
    </div>
  )
}

LoginSignUp.propTypes = {
  /**
  * Enter first name and last name
  */
   name: PropTypes.string,
 /**
  * Enter email address
  */
   email: PropTypes.string,
 /**
  * Enter password
  */
   password: PropTypes.string,
 /**
  * Create a new account
  */
   onSignUpClick: PropTypes.func,
 /**
  * Sign in to your account
  */
   onLoginClick: PropTypes.func,
 /**
  * Choose a color theme for your texts
  */
   color:PropTypes.string,
 /**
  * Choose a background color theme for your texts
  */
   backgroundColor: PropTypes.string,
 /**
  * How large should the fields be?
  */
   size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

LoginSignUp.defaultProps = {
  name: 'John Doe',
  email: 'John.doe@123.com',
  password: 'HelloWorld',
  onSignUpClick: PropTypes.func,
  onLoginClick: PropTypes.func,
  color:'Black',
  backgroundColor: 'Black',
  size: 'md'
 }

export default LoginSignUp