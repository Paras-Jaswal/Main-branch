import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import SidebarHeader from "./SidebarHeader";

function Sidebar({ onUserClick, activeUser }) {
  const users = ["Family Group", "User", "User1", "User4", "user3"];
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="sidebar container-fluid">
     
<SidebarHeader/>
<div className={`sidebar-item `} >Family Group</div>
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
      <Modal  dialogClassName="modal-dialog-scrollable" show={show} onHide={handleClose}    backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Portfolio User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container popup">
          <form>
            <div className="col-12 d-flex   my-2">
            <label className="label-name">Portfolio Name *</label>
            <input type="text " required />
            </div>
            <div className="col-12 d-flex    my-2">
            <label className="label-name">Full Name</label>
            <input type="text " required />
            </div>
            <div className="col-12 d-flex  my-2 ">
            <label className="label-name" for="flexCheckDefault">Strategy / Goal Portfolio </label>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={isChecked}
          onChange={handleCheckboxChange} />
            </div>
            {isChecked && (
        <div className="col-12 d-flex  my-2 " id="additionalInputs">
          <label className="label-name">Type</label>
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
       <Button
        onClick={() => setOpen(!open)}
        variant="none"
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       <p className="text-primary-emphasis"> + Additional Information</p>
      </Button>
      {/* inner Form */}
      <Collapse in={open}>
      <div className="row">
      <div className="col-12 d-flex   my-2">
            <label className="label-name">Address</label>
            <textarea />
            </div>
            <div className="col-12 d-flex  my-2">
            <label className="label-name">City</label>
            <input type="text "  />
            </div>
              <div className="col-12 d-flex  my-2">
            <label className="label-name">Country</label>
            <input type="text "  />
            </div>
            <div className="col-12 d-flex   my-2">
            <label className="label-name">Pincode</label>
            <input type="text "  />
            </div>
            <div className="col-12 d-flex   my-2">
            <label className="label-name">Country</label>
            <input type="text "  />
            </div>
            </div>
      </Collapse>
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
