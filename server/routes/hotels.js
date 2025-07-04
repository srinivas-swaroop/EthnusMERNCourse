const express = require('express');
const Hotel = require('../models/Hotel');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).json(hotel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const { city, min, max } = req.query;
    const query = {};

    if (city) query.city = city;
    if (min || max) {
      query.pricePerNight = {};
      if (min) query.pricePerNight.$gte = Number(min);
      if (max) query.pricePerNight.$lte = Number(max);
    }

    const hotels = await Hotel.find(query);
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 
