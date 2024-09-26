import axios from 'axios';
import React, { useState } from 'react';

function Login() {
  const [emailId, setEmailId] = useState('lokesh@gmail.com');
  const [password, setPassword] = useState('Lokesh@123mahender');
  const handleLogin = async () => {
    try {
      await axios.post(
        'http://localhost:3000/login',
        { emailId, password },
        { withCredentials: true },
      );
    } catch (error) {
      throw new Error('Error ', error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="card bg-base-200 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Email ID</span>
            </div>
            <input
              type="text"
              value={emailId}
              placeholder="abc@example.com"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs  my-2">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="!password@2"
              value={password}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="card-actions justify-center my-2">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
