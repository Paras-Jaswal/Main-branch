import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const SignupforInvestor = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telNumber: '',
    describesInvestor: '',
    password: '',
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost/portfolio/backend/register.php', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert(response.data.message);
      navigate('/login')
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <section className='login-signup'>
        <Header/>
        <div className="container-fluid">
          <div className="row">
           
            <div className="col-6">
              <div className="card">
                <h4>Try now for free...</h4>
                <span style={{ color: '#022b54' }}>or buy now..</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className='col-6 my-2'>
                      <label>First Name:</label>
                      <input
                        type="text"
                        name="firstName"
                        {...register('firstName', { required: true })}
                        required
                      />
                    </div>
                    <div className='col-6 my-2'>
                      <label>Last Name:</label>
                      <input
                        type="text"
                        name="lastName"
                        {...register('lastName', { required: true })}
                        required
                      />
                    </div>
                    <div className='col-12 my-2'>
                      <label>Email:</label>
                      <input
                        type="email"
                        name="email"
                        {...register('email', { required: true })}
                        required
                      />
                    </div>
                    <div className='col-12 my-2'>
                      <label>Telephone Number:</label>
                      <input
                        type="text"
                        name="telNumber"
                        {...register('telNumber', { required: true })}
                        required
                      />
                    </div>
                    <div className='col-12 my-2'>
                      <label>Indicate your company profile</label>
                      <select
                        className="form-select"
                        name="describesInvestor"
                        {...register('describesInvestor', { required: true })}
                        required
                      >
                        <option value="" disabled selected>Select</option>
                        <option value="MF Distributer">MF Distributer</option>
                        <option value="RIA">RIA</option>
                        <option value="Sub-Broker/Broker">Sub-Broker/Broker</option>
                        <option value="Chartered Accountant">Chartered Accountant</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className='my-2 col-12'>
                      <label>Password:</label>
                      <input
                        type="password"
                        name="password"
                        {...register('password', { required: true })}
                        required
                      />
                    </div>
                    <button className="btn btn-primary" type="submit">Register</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-6 text-white justify-content-start signup-text">
              <h2>Manage your family investments with MProfit</h2>
              <p>Auto-import your trade data for Stocks, Mutual Funds & other assets from 700+ brokers. Track your consolidated XIRR, get Capital Gain reports and gain advanced portfolio insights!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupforInvestor;
