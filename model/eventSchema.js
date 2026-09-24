const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Email:{ 
        type: String,
        required: true
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "eventOrganizer",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "localEventUser",
        required: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('eventRegistration', eventSchema)