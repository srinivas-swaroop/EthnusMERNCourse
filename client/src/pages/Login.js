import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://ethnusmerncourse-1.onrender.com/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      setErrMsg(err.response?.data || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errMsg && <p className="error-msg">{errMsg}</p>}

      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin}>Login</button>

      <p>
        Don&apos;t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;
