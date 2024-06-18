import React from 'react'
import Header from './Header'

function Login() {
  return (
    <div className='loginContainer'>
      <form action=''>
        <h1>Login</h1>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
