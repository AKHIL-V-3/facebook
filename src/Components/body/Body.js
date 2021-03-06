import React from 'react'
import './Body.css'
import { useRef } from 'react'
import { auth } from '../../Firebase'
function Body() {
const emailRef=useRef(null)
const PasswordRef=useRef(null)

const  Register = (e)=>{
  e.preventDefault()
  auth.createUserWithEmailAndPassword(
    emailRef.current.value,
    PasswordRef.current.value

  ).then((userAuth)=>{
    console.log(userAuth)
  }).catch((error)=>{
    alert(error.message)
  })
}




  return (
    <div className='Body'>
        <div className="Body__left">
        <img  className='Body__logo' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="logo" />
        <h1>Facebook helps you connect and share with the people in your life.</h1>
        </div>
            <div className="Body__contents">
                <form >
                <input ref={emailRef} type="email or phone number" placeholder='Email address or phone number' />
                <input ref={PasswordRef} type="Password" placeholder='Password' />
                <button className='Body__LogIn'>Log In</button>
                <h4>forgotten password?</h4>
                <div className='line'></div>
                <button 
                onClick={Register} 
                className='Button__createNew'>Create New Account</button>
                <div className='none'></div>
              </form>
               
            </div>
            <h4>
                    <span className='bold'>Create a Page</span>
                     <span> for a celebrity, brand or business.</span>
                      </h4>
    </div>
  )
}

export default Body
