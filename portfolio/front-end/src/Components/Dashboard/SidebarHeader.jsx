import React from 'react'

function SidebarHeader() {
  return (
    <div>
      <div className="row p-0 pb-4 preview">
        <div className="col-6">
          <p className="p-0 m-0">Sensex</p></div>
        <div className="col-6 text-success"><span>+0.19%</span></div>
        <div className="col-6 ">
          <span>80540</span>
        </div>
        <div className="col-6 pb-2 text-success">
          <span>+169</span>
        </div>
      <hr className="my-1" />
      <div className="col-6 m-0">
          <p className="p-0 m-0">Nifty:</p></div>
        <div className="col-6 text-success"><span>+0.13%</span></div>
        <div className="col-6">
          <span>50540</span>
        </div>
        <div className="col-6 text-success">
          <span>+130</span>
        </div>
      </div>
    </div>
  )
}

export default SidebarHeader
