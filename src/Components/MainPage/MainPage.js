import React, { useState } from 'react'
import PropTypes from "prop-types"
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import LoginSignUp from '../LoginSignUp/LoginSignUp'

export default function MainPage() {
    function onSignUpClick() {
       console.log('hello') 
    }
    function onLoginClick() {
        console.log('hello') 
     }
  return (
    <div>
        <LoginSignUp 
            onSignUpClick={onSignUpClick}
            onLoginClick={onLoginClick}
            theme='red'
            size='sm'
        />
    </div>
  )
}


MainPage.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    onSignUpClick: PropTypes.func,
    onLoginClick: PropTypes.func,
  }
