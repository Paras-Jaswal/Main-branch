import React from 'react';

function Sidebar({ onUserClick, activeUser }) {
  const users = ['Family Group', 'User', 'User1', 'User4', 'user3'];

  return (
    <div className="sidebar">
      {users.map((user) => (
        <div
          key={user}
          className={`sidebar-item ${activeUser === user ? 'active' : ''}`}
          onClick={() => onUserClick(user)}
        >
          {user}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
