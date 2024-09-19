import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./admin/sidebar";
import Dashboard from "./admin/dashboard";
import Event from "./admin/event";
import Booking from "./admin/booking";
import Login from "./admin/login";
import Users from "./admin/users";
import EventAddForm from "./admin/eventAddForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className="app">
              <Sidebar />
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/event" element={<Event />} />
                  <Route path="/booking" element={<Booking/>}/>
                  <Route path="/users" element={<Users/>}></Route>
                  <Route path="/addEvent" element={<EventAddForm/>}/>
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
