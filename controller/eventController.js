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
            const myEvent = await eventSchema.find({userId: req.user.id}).populate("eventId").sort({createdAt: "desc"}).lean()
            return res.render('myEvent',{ myEvent })
        }catch (err){
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

    eventRegistration: async (req,res)=> {
        try{
            const {fullName, email, phone, eventId} = req.body
            await eventSchema.create({
                fullName: fullName,
                Email: email,
                Phone: phone,
                eventId: eventId,
                userId: req.user.id
            })

            const updatedDoc = await organizerSchema.findByIdAndUpdate( eventId ,
                { $inc: { Capacity: -1 } },
                { new: true } 
            );

            if(!updatedDoc){
                return res.status(404).send("Organizer not found")
            }

            return res.redirect('/')

        } catch(err){
            console.log(err)
            return res.status(500).send("Server error")
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