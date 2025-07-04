const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routes
const authRoutes = require('./routes/auth');
const hotelRoutes = require('./routes/hotels');
const editRoutes = require('./routes/edit'); // ✅ ADD THIS

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/edit', editRoutes); // ✅ MOUNT ROUTE

// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/hotelBooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
