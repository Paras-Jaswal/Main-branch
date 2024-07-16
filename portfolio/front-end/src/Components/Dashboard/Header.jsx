import React from 'react';
function Header() {
  return (
    <div className="header container">
        <div className="row">
        <div className="header-item d-flex justify-content-between col-12 py-0"><p>Sensex:
            </p><span>+0.19%</span></div>
        <div className="header-item d-flex justify-content-between  col-12 py-0"><p>Nifty:
        </p><span>+0.13%</span></div>
        </div>
      
    </div>
  );
}

export default Header;
