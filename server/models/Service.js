const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Service title is required'],
        trim: true,
    },
    shortDescription: {
        type: String,
        required: [true, 'Short description is required'],
    },
    detailedDescription: {
        type: String,
        required: [true, 'Detailed description is required'],
    },
    useCases: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Service', serviceSchema);
