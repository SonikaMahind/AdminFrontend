import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import "../Styles/eventEditForm.css"; // Ensure this file contains your custom styles

function EventEditForm({ eventId }) {
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

  useEffect(() => {
    // Fetch existing event data when the component mounts
    const fetchEventData = async () => {
      const eventData = await getEventData(eventId); // Assume this function fetches the event data
      setFormData(eventData);
    };

    fetchEventData();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateEventInDatabase(eventId, formData); // Assume this function updates the event
      setModalOpen(true);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const getEventData = async (id) => {
    // Simulate fetching event data from a database
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: 'Sample Event',
          description: 'This is a sample event description.',
          date: '2023-10-01',
          startTime: '10:00',
          endTime: '12:00',
          location: 'Sample Location',
          category: 'Sample Category',
          price: '20',
          ticketsAvailable: '100',
          promocode: 'SAVE20',
          image: 'https://example.com/image.png'
        });
      }, 1000);
    });
  };

  const updateEventInDatabase = async (id, data) => {
    // Simulate updating event data in a database
    console.log('Updating event in database:', id, data);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        navigate('/event'); 
      }, 5000); 

      return () => clearTimeout(timer); 
    }
  }, [isModalOpen, navigate]);

  return (
    <div className="eventeditform">
      <h2>Edit Event</h2>
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
            name="endDate"
            value={formData.endDate}
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
        <button type="submit" className="submit-btn">Update Event</button>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img src='https://cdn-icons-png.flaticon.com/256/148/148767.png' alt="Success Icon" />
            <h3>Success!</h3>
            <p>The event has been successfully updated.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventEditForm;
