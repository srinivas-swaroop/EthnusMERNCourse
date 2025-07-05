import { useNavigate } from 'react-router-dom';
import '../styles/Intro.css';

function Intro() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="intro-hero">
      <div className="intro-card">
        <h1>Welcome to the <span>Hotel Management System</span></h1>
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

        <button className="intro-login-button" onClick={handleLogin}>
          🚪 Login to Get Started
        </button>
      </div>
    </div>
  );
}

export default Intro;
