// src/components/SignUpPage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Component = () => {
  return (
    <>
    <section className='bg-light login-signup'>
    <Container  className="p-5  text-center ">
      <Row className="mb-5 ">
        <Col>
          {/* <img src="/path/to/logo.png" alt="MProfit" className="mb-3" /> */}
          <h1 className='text-center'>Market Portfolio</h1>
          <h3 className='mt-5 '>Start tracking your investments with MProfit</h3>
        </Col>
      </Row>
      </Container>
      </section>
      <section className='content-container'>
    <Container  className="p-5  text-center ">

      <Row>
        <Col md={6} className="mb-3">
          <div className="p-4 bg-white shadow-sm card">
            <NavLink to='/sign-up/investor' className="text-decoration-none">
            <div className="card-body">
              <div className="d-flex justify-content-between">
              <h3>I am an Investor</h3>
              <svg width="19.799" height="19.799" viewBox="0 0 19.799 19.799"><path id="choice-card-arrow" data-name="choice-card-arrow" d="M13,0V13H0" transform="translate(0 9.899) rotate(-45)" fill="none" stroke-width="2" stroke="#9a9eb2"></path></svg>
              </div>
            <p>I wish to track my family's investments across all asset classes in one place</p>
           
            </div>  
            </NavLink>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="p-4 bg-white shadow-sm card">
          <NavLink to="/sign-up/wealth" className="text-decoration-none">
            <div className="card-body">
              <div className="d-flex justify-content-between">
              <h3>I am a Wealth Professional</h3>
              <svg width="19.799" height="19.799" viewBox="0 0 19.799 19.799"><path id="choice-card-arrow" data-name="choice-card-arrow" d="M13,0V13H0" transform="translate(0 9.899) rotate(-45)" fill="none" stroke-width="2" stroke="#9a9eb2"></path></svg>
              </div>
            <p>I wish to manage investments for my clients and provide them portfolio tracking & reporting</p>
            
            </div>
            </NavLink>
           
          </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Button variant="white"> <NavLink className='navlink text-decoration-none text-black' to="/login">Already have an account? Login</NavLink></Button>
        </Col>
      </Row>
    </Container>
    </section>
    </>
  );
};

export default Component;
