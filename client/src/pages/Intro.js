// src/pages/Intro.js
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Welcome to the Hotel Management System</h1>
      <p>This is a full-stack project built with:</p>
      <ul>
        <li><strong>Frontend:</strong> React</li>
        <li><strong>Backend:</strong> Node.js + Express</li>
        <li><strong>Database:</strong> MongoDB (Mongoose)</li>
        <li><strong>Auth:</strong> JWT-based authentication</li>
      </ul>

      <p>Features include:</p>
      <ul>
        <li>User Registration and Login</li>
        <li>Add and View Hotels</li>
        <li>Filter by city and price</li>
      </ul>

      <button
        onClick={handleLogin}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Intro;
