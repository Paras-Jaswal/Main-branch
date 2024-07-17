import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Portfolio from './Portfolio';
import './Dash.scss';
import Navbars from './Navbar';
import Header from './Header';
import DashHead from './DashHead';

function Dashboard() {
  const [activeUser, setActiveUser] = useState('Family Group');

  const handleUserClick = (user) => {
    setActiveUser(user);
  };

  return (
    <div className='app'>
    <Navbars />
<Header />
    <div className=" container-fluid">
      <div className="row">
        <DashHead/>
      </div>
      <div className='row'>
        <div className='col-2 sidebar-container'>
      <Sidebar onUserClick={handleUserClick} activeUser={activeUser} />
      
      </div>

      <div className="main-content col-10">
        <Portfolio activeUser={activeUser} />
      </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
