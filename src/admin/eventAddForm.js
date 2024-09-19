import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import "../Styles/eventAddForm.css"; // Ensure this file contains your custom styles

function EventAddForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    category: '',
    price: '',
    ticketsAvailable: '',
    promocode: '',
    image: ''
  });

  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate API call to add the event
    try {
      await addEventToDatabase(formData); // Replace with your function to add to DB
      setModalOpen(true); // Open the modal
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const addEventToDatabase = async (data) => {
    // Simulate an API call
    console.log('Adding event to database:', data);
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        navigate('/event'); // Redirect to events page after 2 seconds
      }, 1000); // 1 seconds delay

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [isModalOpen, navigate]);

  return (
    <div className="eventaddform">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Time:
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate" // Changed name to endDate to differentiate
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Time:
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Total Tickets:
          <input
            type="number"
            name="ticketsAvailable"
            value={formData.ticketsAvailable}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Promocode:
          <input
            type="text"
            name="promocode"
            value={formData.promocode}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Event Image URL:
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="submit-btn">Add Event</button>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Success!</h3>
            <p>The event has been successfully added.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventAddForm;
