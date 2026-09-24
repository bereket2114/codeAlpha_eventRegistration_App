const organizerSchema = require('../model/organizerSchema')
const eventSchema = require('../model/eventSchema')

module.exports = {
    getDashboard : async (req,res) => {
        try{
            return res.render('organizerDashboard')
        } catch(err){
            console.log(err)
            return res.status(404).json({
                success: false,
                message: "Page Not Found",
                error: err.message
            })
        }
    },

    getRegistrationList: async (req,res) => {
        try{
            const register = await eventSchema.find().populate("eventId").sort({createdAt: "desc"}).lean()
            const count = await eventSchema.countDocuments();
            return res.render("registrationList", { register, count })
        } catch(err){
            console.log(err)
            return res.status(404).send("Page not found")
        }
    },

    postEvent : async (req,res) => {
        try{
            const {title, description, capacity, location, eventDate} = req.body
            await organizerSchema.create({
                Title: title,
                Description: description,
                eventDate: eventDate,
                Location: location,
                Capacity: capacity
            })

            return res.redirect('/')

        } catch(err){
            console.log(err)
            return res.status(500).json({
                success: false,
                message: "Server error",
                error: err.message
            })
        }
    },
    
}