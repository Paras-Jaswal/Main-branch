import React from 'react';
import Navbar from './Navbar';
import './Dash.scss'
function Dashboard () {
  return (
    <main>
        <header>
        <Navbar />
        </header>
        <section className='dashboard'>
            <div className="container-fluid">
                <div className="row">
<div className="d-flex column-gap-2 bg-secondary">
    <button className='btn '> &lt; </button>
    <button className='btn btn-outline-primary'> INV</button>
    <button className='btn btn-outline-primary'> F&O</button>
    <p className='pt-1 m-0' >Portfolio : <span><b>User</b></span></p>
</div>
                </div>
                <div className="row">
                    <div className="col-2 text-start left-container">
                      <div className="d-flex justify-content-start">
                        <h5>Sensex</h5>
                        <p className='text-success'>+0.19%</p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <p>80,500</p>
                        <p className='text-success'>+0.19%</p>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-start">
                        <h5>Sensex</h5>
                        <p className='text-success'>+0.19%</p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <p>80,500</p>
                        <p className='text-success'>+0.19%</p>
                      </div>
                    </div>
                    <div className="col-10 right-container">
                        <h2>content</h2>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}

export default Dashboard ;
