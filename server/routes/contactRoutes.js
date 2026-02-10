const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// submit a new inquiry
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required (name, email, message)' });
        }

        // TODO: Add error handling for network timeout
        const inquiry = new Contact({ name, email, message });
        await inquiry.save();

        res.status(201).json({ message: 'Inquiry submitted successfully', data: inquiry });
    } catch (err) {
        // mongoose validation errors
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map((e) => e.message);
            return res.status(400).json({ error: messages.join(', ') });
        }
        console.error('Contact submission error:', err);
        res.status(500).json({ error: 'Failed to submit inquiry' });
    }
});

// fetch all inquiries (for verification/admin)
router.get('/', async (req, res) => {
    try {
        const inquiries = await Contact.find().sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve inquiries' });
    }
});

module.exports = router;
