import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      setErrMsg(err.response?.data || "Login failed");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button onClick={handleLogin}>Login</button>

      <p>
  Don't have an account? <a href="/register">Register here</a>
</p>


    </div>
  );
}

export default Login;
