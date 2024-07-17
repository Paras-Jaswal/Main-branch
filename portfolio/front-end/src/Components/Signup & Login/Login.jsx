import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthenticated } from '../Auth/Auth';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect (()=>{
    if (isAuthenticated()) {
      navigate('/dashboard');
    }
  },[])
 

  useEffect(() => {
    if (user.length > 0 && user.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    if (password.length > 0 && password.length < 6) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  }, [password, user]);

  // Regex pattern for basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const loginHandle = async (e) => {
    e.preventDefault();
    setLoginError('');
    if (user.length < 3 || password.length < 3) {
      toast.error('Please fill your username and password.');
    } else if (!emailRegex.test(user)) {
      toast.error('Please enter a valid email address.');
    } else {
      setLoading(true);
      try {
        const response = await axios.post('http://localhost/portfolio/backend/login.php', {
          email: user,
          password: password,
        });

        setLoading(false);

        if (response.data.status === 'success') {
          localStorage.setItem('authToken', response.data.token);
          console.log(response.data.token);
          navigate('/dashboard');
        } else {
          toast.error('Invalid email or password');
        }
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
        toast.error('Invalid email or password');
      }
    }
  };

  const userHandle = (e) => {
    setUser(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className='login-form' >
      <div className='container text-center pt-5 d-flex justify-content-center'>
        <div className='card' >
          <div className='col-lg-12 pt-5'>
            <h2 className='text-primary'>Login Page</h2>
          </div>
          <div className='col-lg-12 py-5'>
            <form onSubmit={loginHandle}>
                  <div className='col-12'>
                    <input
                      type='text'
                      className={`form-control ms-auto me-auto ${userErr ? 'is-invalid' : ''}`}
                      placeholder='Enter your email'
                      onChange={userHandle}
                    
                    />
                    {userErr && <span className='invalid-feedback'>Please enter a valid email.</span>}
                    <br /><br />
                  </div>
                  <div className='col-12'>
                    <input
                      type='password'
                      className={`form-control ms-auto me-auto ${passErr ? 'is-invalid' : ''}`}
                      placeholder='Enter your password'
                     
                      onChange={passwordHandler}
                    />
                    {passErr && <span className='invalid-feedback'>Password must be at least 3 characters.</span>}
                    <br /><br />
                  </div>
              {loading && <div className='spinner-border text-primary' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </div>}
              <p className='text-primary-emphasis'>Doesn't have an account? <NavLink to='/' className='text-decoration-none'><p>Sign Up</p></NavLink></p>
              <button type='submit' className='btn btn-outline-primary'>Login</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
