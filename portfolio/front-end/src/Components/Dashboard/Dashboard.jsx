import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Portfolio from './Portfolio';
import './Dash.scss';

function Dashboard() {
  const [activeUser, setActiveUser] = useState('Family Group');

  const handleUserClick = (user) => {
    setActiveUser(user);
  };

  return (
    <div className="app container-fluid">
      <div className='row'>
        <div className='col-2'>
      <Sidebar onUserClick={handleUserClick} activeUser={activeUser} />
      
      </div>

      <div className="main-content col-10">
        <Portfolio activeUser={activeUser} />
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
