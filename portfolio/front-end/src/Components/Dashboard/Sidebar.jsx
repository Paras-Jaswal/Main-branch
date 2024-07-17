import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import SidebarHeader from "./SidebarHeader";
import axios from 'axios'

function Sidebar({ onUserClick, activeUser }) {
  const users = ["Family Group", "User", "User1", "User4", "user3"];
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [portfolioName, setPortfolioName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [strategyGoal, setStrategyGoal] = useState('');
  const handleSave = async () => {
    const data = {
      portfolio_name: portfolioName,
      full_name: fullName,
      strategy_goal: isChecked ? strategyGoal : ''
    };

    try {
      const response = await axios.post('http://localhost/portfolio/backend/save_portfolio_user.php', data);
      console.log(response.data);
      // handle success, show a success message or close modal
      handleClose();
    } catch (error) {
      console.error('There was an error saving the data!', error);
      // handle error, show an error message
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleStrategyGoalChange = (event) => {
    setStrategyGoal(event.target.value);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="sidebar container-fluid">
     
<SidebarHeader/>
      {users.map((user) => (
        <div
          key={user}
          className={`sidebar-item ${activeUser === user ? "active" : ""}`}
          onClick={() => onUserClick(user)}
        >
          <p>{user}</p>
        </div>
      ))}
   
      <button className="btn "  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}>
      <div className="d-flex justify-content-between">
      <span className="plus">+</span>
      <p className="text"> Add Portfolio</p>
        </div></button>
     
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
            <input type="text " required value={portfolioName} onChange={(e) => setPortfolioName(e.target.value)} />
            </div>
            <div className="col-12 d-flex    my-2">
            <label className="label-name">Full Name</label>
            <input type="text " required  value={fullName} onChange={(e) => setFullName(e.target.value)} />
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
              value="Strategy"
              onChange={handleStrategyGoalChange}
            />
            <label className="form-check-label" htmlFor="strategyGoal">
              Strategy 
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Goal"
              name="strategyGoal"
              id="strategyGoal"
              onChange={handleStrategyGoalChange}
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
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Sidebar;
