const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// get all services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 });
        res.json(services);
    } catch (err) {
        console.error('Failed to fetch services:', err.message);
        res.status(500).json({ error: 'Something went wrong fetching services' });
    }
});

// get single service by id
router.get('/:id', async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.json(service);
    } catch (err) {
        // handle invalid objectid format
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ error: 'Invalid service ID format' });
        }
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
