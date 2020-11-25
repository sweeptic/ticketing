import React, { useState } from 'react';

const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    console.log(email, password);
  };

  return (
    <form className='container' onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className='form-group'>
        <label>Email Address</label>
        <input
          className='form-control'
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />
      </div>
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};

export default signup;
