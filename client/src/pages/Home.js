import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // Make sure this path is correct

function Home() {
  const [hotels, setHotels] = useState([]);
  const [city, setCity] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchHotels();
  }, [city, min, max]);

  const fetchHotels = async () => {
    try {
      const res = await axios.get('https://ethnusmerncourse-1.onrender.com/api/hotels', {
        params: { city, min, max },
      });
      setHotels(res.data);
    } catch (err) {
      console.error('Failed to fetch hotels:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const redirectToBooking = (hotelName) => {
    const encodedName = encodeURIComponent(hotelName);
    const url = `https://www.makemytrip.com/hotels/${encodedName}.html`;
    window.open(url, '_blank');
  };

  return (
    <div className="homepage">
      <div className="navbar">
        <h2>🏨 Hotel Listings</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
        <button onClick={fetchHotels}>Search</button>
      </div>

      <div className="hotel-list">
        {hotels.length === 0 ? (
          <p>No hotels found.</p>
        ) : (
          hotels.map((hotel) => (
            <div key={hotel._id} className="hotel-card">
              {hotel.imageUrl || hotel.image ? (
                <img
                  src={hotel.imageUrl || hotel.image}
                  alt={hotel.name}
                />
              ) : null}
              <div className="hotel-details">
                <h3>{hotel.name}</h3>
                <p><strong>City:</strong> {hotel.city}</p>
                <p><strong>Type:</strong> {hotel.type}</p>
                <p><strong>Price:</strong> ₹{hotel.pricePerNight || hotel.price}</p>
                <p>{hotel.description}</p>
                <div className="hotel-actions">
                  <button
                    className="book-btn"
                    onClick={() => redirectToBooking(hotel.name)}
                  >
                    Book
                  </button>
                  <button className="edit-btn">Edit</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
