import React from 'react'
import { NavLink } from 'react-router-dom'

function Headers() {
  return (
 <>
 <div className='container-fluid mb-5 pt-2'>
    <div className="d-flex  ">
        <NavLink to="/" className="text-decoration-none text-white pt-2">Portfolio</NavLink>
<div className='ms-auto d-flex column-gap-5 pt-2'>
        <NavLink to="/sign-up/investor" className="text-decoration-none text-white navs">Investor</NavLink>
        <NavLink to="/sign-up/wealth" className="text-decoration-none text-white navs">Wealth Proffesionals</NavLink>
        </div>
        <div className="ms-auto d-flex column-gap-3">
        <p className='pt-2 text-primary'>Already have an account?</p> 
        <NavLink to="/login" className="text-decoration-none">
       <button className='btn btn-primary'> Login</button></NavLink>
       </div>
    </div>
 </div>
 </>
  )
}

export default Headers