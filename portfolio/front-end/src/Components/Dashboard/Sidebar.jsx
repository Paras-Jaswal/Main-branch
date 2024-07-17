import React, { useState, useCallback, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import SidebarHeader from "./SidebarHeader";
import axios from 'axios';

function Sidebar({ onUserClick, activeUser }) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [portfolioName, setPortfolioName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [strategyGoal, setStrategyGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]); // State to store fetched users

 
  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost/portfolio/backend/save_portfolio_user.php');
      setUsers(response.data); // Assuming the response contains a users array
    } catch (error) {
      console.error('There was an error fetching the users!', error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  const handleSave = useCallback(async (e) => {
    e.preventDefault();
    if (!portfolioName) {
      setError('Portfolio Name is required');
      return;
    }
    setLoading(true);
    setError('');

    const data = {
      portfolio_name: portfolioName,
      full_name: fullName,
      strategy_goal: isChecked ? strategyGoal : ''
    };

    try {
      const response = await axios.post('http://localhost/portfolio/backend/save_portfolio_user.php', data);
      console.log(response.data);
      // handle success, show a success message or close modal
      setLoading(false);
      handleClose();
      fetchUsers();
    } catch (error) {
      console.error('There was an error saving the data!', error);
      setError('There was an error saving the data!');
      setLoading(false);
    }
  }, [portfolioName, fullName, strategyGoal, isChecked]);

  const handleClose = useCallback(() => setShow(false), []);
  const handleShow = useCallback(() => setShow(true), []);
  const handleStrategyGoalChange = useCallback((event) => {
    setStrategyGoal(event.target.value);
  }, []);
  const handleCheckboxChange = useCallback(() => {
    setIsChecked(prevIsChecked => !prevIsChecked);
  }, []);

  return (
    <div className="sidebar container-fluid">
      <SidebarHeader />
      <div
        className={`sidebar-item ${activeUser === "Family Group" ? "active" : ""}`}
        onClick={() => onUserClick("Family Group")}
      >
        <p>Family Group</p>
      </div>
      {users.map((user) => (
        <div
          key={user.id}
          className={`sidebar-item ${activeUser === user.portfolio_name ? "active" : ""}`}
          onClick={() => onUserClick(user.portfolio_name)}
        >
          <p>{user.portfolio_name}</p>
        </div>
      ))}
      <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleShow}>
        <span className="plus">+</span> Add Portfolio
      </button>

      {/* Popup */}
      <Modal dialogClassName="modal-dialog-scrollable" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Portfolio User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container popup">
            <form>
              <div className="col-12 d-flex my-2">
                <label className="label-name">Portfolio Name *</label>
                <input type="text" required value={portfolioName} onChange={(e) => setPortfolioName(e.target.value)} />
              </div>
              <div className="col-12 d-flex my-2">
                <label className="label-name">Full Name</label>
                <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="col-12 d-flex my-2">
                <label className="label-name" htmlFor="flexCheckDefault">Strategy / Goal Portfolio</label>
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" checked={isChecked} onChange={handleCheckboxChange} />
              </div>
              {isChecked && (
                <div className="col-12 d-flex my-2" id="additionalInputs">
                  <label className="label-name">Type</label>
                  <div className="d-flex column-gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="strategyGoal"
                        id="strategy"
                        value="Strategy"
                        onChange={handleStrategyGoalChange}
                      />
                      <label className="form-check-label" htmlFor="strategy">
                        Strategy
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="Goal"
                        name="strategyGoal"
                        id="goal"
                        onChange={handleStrategyGoalChange}
                      />
                      <label className="form-check-label" htmlFor="goal">
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
              {/* Inner Form */}
              <Collapse in={open}>
                <div className="row">
                  <div className="col-12 d-flex my-2">
                    <label className="label-name">Address</label>
                    <textarea />
                  </div>
                  <div className="col-12 d-flex my-2">
                    <label className="label-name">City</label>
                    <input type="text" />
                  </div>
                  <div className="col-12 d-flex my-2">
                    <label className="label-name">Country</label>
                    <input type="text" />
                  </div>
                  <div className="col-12 d-flex my-2">
                    <label className="label-name">Pincode</label>
                    <input type="text" />
                  </div>
                  <div className="col-12 d-flex my-2">
                    <label className="label-name">Country</label>
                    <input type="text" />
                  </div>
                </div>
              </Collapse>
            </form>
            {loading &&  <p><div className='spinner-border text-primary' role='status' />Please Wait...</p> }
            {error && <p className="text-danger">{error}</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={loading}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Sidebar;
