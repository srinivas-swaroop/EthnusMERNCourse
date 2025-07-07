import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AddHotel.css';

function AddHotel() {
  const [data, setData] = useState({
    name: '',
    city: '',
    pricePerNight: '',
    type: '',
    description: '',
    imageUrl: ''
  });

  const navigate = useNavigate();

  const handleAdd = async () => {
    try {
      await axios.post('https://ethnusmerncourse-1.onrender.com/api/hotels', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      navigate('/');
    } catch (err) {
      console.error('Error adding hotel:', err.response?.data || err.message);
      alert(err.response?.data?.error || 'Failed to add hotel');
    }
  };

  return (
    <div className="add-hotel-container">
      <h2>Add Hotel</h2>
      <input
        className="form-input"
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={e => setData({ ...data, name: e.target.value })}
      />
      <input
        className="form-input"
        type="text"
        placeholder="City"
        value={data.city}
        onChange={e => setData({ ...data, city: e.target.value })}
      />
      <input
        className="form-input"
        type="number"
        placeholder="Price Per Night"
        value={data.pricePerNight}
        onChange={e => setData({ ...data, pricePerNight: e.target.value })}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Type (Hotel, Hostel, etc.)"
        value={data.type}
        onChange={e => setData({ ...data, type: e.target.value })}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Description"
        value={data.description}
        onChange={e => setData({ ...data, description: e.target.value })}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Image URL"
        value={data.imageUrl}
        onChange={e => setData({ ...data, imageUrl: e.target.value })}
      />
      <button className="submit-button" onClick={handleAdd}>Add Hotel</button>
    </div>
  );
}

export default AddHotel;
