import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isAuthenticated } from './auth';
const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  // If already authenticated, redirect to dashboard
  
  const loginHandle = async (e) => {
    e.preventDefault();
    if (user.length < 3 || password.length < 3) {
      alert("Please Fill Your Username and Passwords");
    } else {
      try {
        const response = await axios.post('http://localhost/portfolio/backend/login.php', {
          email: user,
          password: password,
        });
      
        if (response.data.status === 'success') {
          localStorage.setItem('authToken', response.data.token);
          console.log(response.data.token);
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  const userHandle = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  };

  const passwordHandler = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  };
  if (isAuthenticated()) {
    navigate('/dashboard');
  }
  return (
    <div className='login-form'>
      <div className='container text-center pt-5'>
        <div className='col-lg-12'>
          <h2 className='text-primary'>Login Page</h2>
        </div>
        <div className='col-lg-12 py-5'>
          <form onSubmit={loginHandle}>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <input
                    type="text"
                    className='form-control ms-auto me-auto'
                    placeholder='Enter your email'
                    onChange={userHandle}
                    style={{ width: '250px' }}
                  />
                  {userErr ? <span>User not Valid</span> : ""}
                  <br /><br />
                </div>
                <div className='col-12'>
                  <input
                    type="password"
                    className='form-control ms-auto me-auto'
                    placeholder='Enter your password'
                    style={{ width: '250px' }}
                    onChange={passwordHandler}
                  />
                  {passErr ? <span>Password not Valid</span> : ""}
                  <br /><br />
                </div>
              </div>
            </div>
            <p>Doesn't have account <NavLink to='/'><p>Sign up</p></NavLink></p>
            <button type="submit" className='btn btn-outline-primary'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
