import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from './Header';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      alert('User login successful');
      setRedirect(true);
    } else {
      alert('Failed to login user');
    }
  }

  if (redirect) {
    return <Navigate to="/" />; 
  }

  return (
    <div className='loginContainer'>
      <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={ev => setUsername(ev.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
