// backend/routes/edit.js
const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// GET hotel by ID
router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ error: 'Hotel not found' });
    res.json(hotel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE hotel by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedHotel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
