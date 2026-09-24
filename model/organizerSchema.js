const mongoose = require('mongoose')

const organizerSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
/*    imageUrl:{
        type: String,
        required: true
    },
    cloudinaryId: {
        type: String,
        required: true
    },   */
    eventDate:{
        type: Date,
        required: true
    },
    Location:{
        type: String,
        required: true
    },
    Capacity:{
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('eventOrganizer', organizerSchema)