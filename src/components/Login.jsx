import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URl } from '../utils/constants';

function Login() {
  const [emailId, setEmailId] = useState('lokesh@gmail.com');
  const [password, setPassword] = useState('Lokesh@123mahender');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URl + '/login',
        { emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res.data));
      return navigate('/');
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
