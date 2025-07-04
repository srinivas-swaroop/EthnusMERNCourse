import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Login from './pages/Login';
import AddHotel from './pages/AddHotel';
import Register from './pages/Register';
import EditHotel from './pages/EditHotel'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Default route (Intro page) */}
        <Route path="/" element={<Intro />} />
        <Route path="/intro" element={<Intro />} />

        {/* 👇 Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 👇 Main app features */}
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddHotel />} />
        <Route path="/edit/:id" element={<EditHotel />} />
      </Routes>
    </Router>
  );
}

export default App;
