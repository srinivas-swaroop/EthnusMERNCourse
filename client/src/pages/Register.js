import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      navigate('/login');
    } catch (err) {
      setErrMsg(err.response?.data || 'Registration failed');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Register</h2>
      {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
      <input
        placeholder="Username"
        onChange={e => setForm({ ...form, username: e.target.value })}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
