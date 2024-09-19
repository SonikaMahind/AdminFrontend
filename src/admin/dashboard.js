import React from "react";
import "../Styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome To Event Manager Dashboard</h1>
      <div className="box">
        <div className="box1">
          <h2>Total Number of Events</h2>
          <h4>28</h4>
        </div>
        <div className="box1">
        <h2>Total Number of Users</h2>
        <h4>28</h4>
        </div>
        <div className="box1">
        <h2>Total Number of Booked Tickets</h2>
        <h4>28</h4>
        </div>
        <div className="box1"><h2>Total Number of Cancelled Tickets</h2>
        <h4>28</h4></div>
      </div>
    </div>
  );
};

export default Dashboard;
