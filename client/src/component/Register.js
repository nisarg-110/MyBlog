import React from 'react'

function Register() {
  return (
    <div className='registerContainer'>
      <form className='register'>
        <h1>Register</h1>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
