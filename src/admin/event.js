import React from 'react';
import "../Styles/event.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Event() {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/editEvent');
  };

  return (
    <div className="event">
      <h1>Events</h1>
      <Link to="/addEvent">
        <button className='btnadd'>Add</button>
      </Link>
      <table className="events-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Venue</th>
            <th>No. of Tickets</th>
            <th>Price per person</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array(2).fill().map((_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>Holi Event</td>
              <td>Traditional</td>
              <td>15th March, 2025 - 11:00 am</td>
              <td>15th March, 2025 - 6:00 pm</td>
              <td>Hoodi, Bangalore</td>
              <td>60</td>
              <td>1500</td>
              <td>active</td>
              <td>
                <div className="action-buttons">
                  <button className="action-button view">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button className="action-button edit" onClick={handleEditClick}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="action-button delete">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Event;
