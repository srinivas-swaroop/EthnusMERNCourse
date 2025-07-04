import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [hotels, setHotels] = useState([]);
  const [city, setCity] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  useEffect(() => {
    fetchHotels();
  }, [city, min, max]);

  const fetchHotels = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/hotels', {
        params: { city, min, max }
      });
      setHotels(res.data);
    } catch (err) {
      console.error('Failed to fetch hotels:', err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Hotel Listings</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          placeholder="Min Price"
          type="number"
          value={min}
          onChange={e => setMin(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          placeholder="Max Price"
          type="number"
          value={max}
          onChange={e => setMax(e.target.value)}
        />
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {hotels.map(hotel => (
          <li key={hotel._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h3>{hotel.name}</h3>
            <p><strong>City:</strong> {hotel.city}</p>
            <p><strong>Type:</strong> {hotel.type}</p>
            <p><strong>Price:</strong> ${hotel.pricePerNight}</p>
            <p>{hotel.description}</p>
            {hotel.imageUrl && (
              <img
                src={hotel.imageUrl}
                alt={hotel.name}
                style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '8px' }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
