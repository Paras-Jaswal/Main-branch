// src/components/SignUpPage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Component = () => {
  return (
    <Container fluid className="p-5 bg-light text-center">
      <Row className="mb-5">
        <Col>
          {/* <img src="/path/to/logo.png" alt="MProfit" className="mb-3" /> */}
          <h1 className='text-center'>Market Portfolio</h1>
          <h3 className='mt-5 '>Start tracking your investments with MProfit</h3>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <div className="p-4 bg-white shadow-sm">
            <h3>I am an Investor</h3>
            <p>I wish to track my family's investments across all asset classes in one place</p>
            <Button variant="primary"><NavLink className='navlink text-decoration-none text-white' to='/sign-up/investor'>Get Started</NavLink></Button>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="p-4 bg-white shadow-sm">
            <h3>I am a Wealth Professional</h3>
            <p>I wish to manage investments for my clients and provide them portfolio tracking & reporting</p>
            <Button variant="primary"><NavLink className='navlink text-decoration-none text-white' to='/sign-up/wealth'>Get Started</NavLink></Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="link"> <NavLink className='navlink text-decoration-none text-black' to="/login">Already have an account? Login</NavLink></Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Component;
