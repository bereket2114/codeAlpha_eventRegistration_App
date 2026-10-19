const organizerSchema = require('../model/organizerSchema')
const eventSchema = require('../model/eventSchema')
const cloudinary = require('../middleware/cloudinary')
const streamifier = require("streamifier");
const sharp = require("sharp");

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
            
            if (!req.file) {
                return res.status(400).send('No file uploaded.');
            }
            
            // 1. Compress the image buffer
            const resizedBuffer = await sharp(req.file.buffer)
                .resize({ width: 1920, height: 1080, fit: 'inside', withoutEnlargement: true })
                .jpeg({ quality: 80 }) 
                .toBuffer();
            
            // 2. Upload the compressed buffer directly to Cloudinary
            const result =  await  new Promise((resolve, reject) => {
                let stream =  cloudinary.uploader.upload_stream(
                    { folder: 'car_images' },
                    (error, result) => {
                        // FIX: Added 'return' keywords back to guarantee Promise completion
                        if (result)  resolve(result);
                        else  reject(error);
                    } 
                );
                streamifier.createReadStream(resizedBuffer).pipe(stream);

            });


            const {title, description, capacity, location, eventDate} = req.body
            await organizerSchema.create({
                Title: title,
                Description: description,
                eventDate: eventDate,
                Location: location, 
                Capacity: capacity,
                imageUrl: result.secure_url,
                cloudinaryId: result.public_id,
            })

            return res.redirect('/admin/')

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