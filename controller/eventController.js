const eventSchema = require('../model/eventSchema')
const organizerSchema = require('../model/organizerSchema')

module.exports = {
    getFeed : async (req,res) => {
        try{
            User = req.user
            const events = await organizerSchema.find().sort({createdAt: 'desc'}).lean()
            return res.render('feedPage', {events, User})
        } catch (err){
            console.log(err)
            return res.status(404).send('Page Not Found')
        }
    },

    myEvent: async (req,res) => {
        try{
        // Find all events registered by the user, populate the event details, and sort them by creation date in descending order
            const userId = req.user.id
            const myEvent = await eventSchema.find({userId: userId}).populate("eventId").sort({createdAt: "desc"}).lean()

            return res.render('myEvent',{ myEvent })

        } catch (err){
            console.log(err)
            return res.status(404).send("Page not found")
        }
    },

    getDetail: async (req, res) => {
        try{
            const Event_id = req.params.id
            const details = await organizerSchema.findById(Event_id).lean()
            
            return res.render('detail', { details })

        } catch(err){
            console.log(err)
            return res.status(404).send("Page Not Found")
        }
    },


    eventRegistration: async (req, res) => { 

        try { 
    
            // Get data from the form first
            const { fullName, email, phone, eventId } = req.body;
    
            // Check if the user has already registered for this event
            const alreadyRegistered = await eventSchema.findOne({ 
                userId: req.user.id, 
                eventId: eventId 
            }); 
     
            if (alreadyRegistered) {  
                req.flash('errors', { 
                    msg: 'You have already registered for this event.' 
                }); 
                return res.redirect('/events/feed'); 
            } 
     
            // Find the event
            const event = await organizerSchema.findById(eventId); 
     
            if (!event) { 
                return res.status(404).send("Event not found"); 
            } 
     
            // Check event capacity
            if (event.Capacity <= 0) { 
                return res.status(400).send("This event is full"); 
            } 
     
            // Create registration
            await eventSchema.create({ 
                fullName: fullName, 
                email: email, 
                phone: phone, 
                eventId: eventId, 
                userId: req.user.id 
            }); 
     
            // Decrement capacity by 1
            const updatedDoc = await organizerSchema.findByIdAndUpdate(
                eventId, 
                { $inc: { Capacity: -1 } }, 
                { new: true }  
            ); 
    
            // Check if the update was successful
            if (!updatedDoc) { 
                return res.status(404).send("Organizer not found"); 
            } 
     
            return res.redirect('/'); 
     
        } catch (err) { 
            console.log(err); 
            return res.status(500).send("Server error"); 
        } 
    },

    cancelEvent: async (req,res) =>{
        try{
            const id = req.params.id
            const cancelRegistration = await eventSchema.findByIdAndDelete(id)

// Increment capacity by 1 by using the delete record eventId
            const updatedDoc = await organizerSchema.findByIdAndUpdate( cancelRegistration.eventId ,
                { $inc: { Capacity: 1 } },
                { new: true } 
            );

            if(!cancelRegistration){
                return res.status(404).send("Registration not found")
            } 

            if (cancelRegistration.userId.toString() !== req.user._id.toString()) {
                return res.status(403).send("You are not allowed to cancel this registration");
            }   

            if(!updatedDoc){
                return res.status(404).send("Event not found")
            }

            return res.redirect('/events/history')

        } catch (err){
            console.log(err)
            return res.status(500).send("Server error")
        }
    }
}