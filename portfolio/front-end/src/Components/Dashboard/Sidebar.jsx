import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Sidebar({ onUserClick, activeUser }) {
  const users = ["Family Group", "User", "User1", "User4", "user3"];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="sidebar container-fluid">
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

      {users.map((user) => (
        <div
          key={user}
          className={`sidebar-item ${activeUser === user ? "active" : ""}`}
          onClick={() => onUserClick(user)}
        >
          <p>{user}</p>
        </div>
      ))}
      <button className="btn "  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}><span className="plus">+</span> Add Portfolio</button>
      {/* Popup */}
      <Modal show={show} onHide={handleClose}    backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container popup">
          <form>
            <div className="col-12 d-flex justify-content-between column-gap-2  my-2">
            <label>Portfolio Name *</label>
            <input type="text " required />
            </div>
            <div className="col-12 d-flex justify-content-between  column-gap-4 my-2">
            <label>Full Name</label>
            <input type="text " required />
            </div>
            <div className="col-12 d-flex column-gap-2 my-2 ">
            <label for="flexCheckDefault">Strategy / Goal Portfolio </label>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={isChecked}
          onChange={handleCheckboxChange} />
            </div>
            {isChecked && (
        <div className="col-12 d-flex justify-content-between column-gap-2 my-2 " id="additionalInputs">
          <label>Type</label>
          <div className="d-flex column-gap-3" >
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="strategyGoal"
              id="strategyGoal"
            />
            <label className="form-check-label" htmlFor="strategyGoal">
              Strategy 
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="strategyGoal"
              id="strategyGoal"
            />
            <label className="form-check-label" htmlFor="strategyGoal">
              Goal 
            </label>
          </div>
          </div>
          
        </div>
      )}
          </form>
          </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Sidebar;
