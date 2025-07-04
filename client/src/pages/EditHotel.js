import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditHotel() {
  const { id } = useParams(); // get hotel ID from URL
  const navigate = useNavigate();
  const [hotel, setHotel] = useState({
    name: '',
    city: '',
    pricePerNight: '',
    type: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    // Fetch hotel by ID
    const fetchHotel = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/edit/${id}`);
        setHotel(res.data);
      } catch (err) {
        console.error('Error fetching hotel:', err);
      }
    };

    fetchHotel();
  }, [id]);

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/edit/${id}`, hotel, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      navigate('/'); // redirect after success
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  return (
    <div>
      <h2>Edit Hotel</h2>
      <input name="name" placeholder="Name" value={hotel.name} onChange={handleChange} />
      <input name="city" placeholder="City" value={hotel.city} onChange={handleChange} />
      <input name="pricePerNight" placeholder="Price" value={hotel.pricePerNight} onChange={handleChange} />
      <input name="type" placeholder="Type" value={hotel.type} onChange={handleChange} />
      <input name="description" placeholder="Description" value={hotel.description} onChange={handleChange} />
      <input name="imageUrl" placeholder="Image URL" value={hotel.imageUrl} onChange={handleChange} />
      <button onClick={handleUpdate}>Update Hotel</button>
    </div>
  );
}

export default EditHotel;
