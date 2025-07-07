import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('https://ethnusmerncourse-1.onrender.com/api/auth/register', form);
      navigate('/login');
    } catch (err) {
      setErrMsg(err.response?.data || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>
      {errMsg && <p className="error-msg">{errMsg}</p>}

      <input
        type="text"
        placeholder="Username"
        onChange={e => setForm({ ...form, username: e.target.value })}
        value={form.username}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
        value={form.email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        value={form.password}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
