//Make my environmental variable at the top to prevent the connection(in case!)
require('dotenv').config({path: './config/.env'})

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const { MongoStore } = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const methodOverride = require('method-override')
const connectDB = require('./config/DB_Connection')
const path = require('path')
const organizerRoute = require('./route/organizerRoute')
const feedPage = require('./route/registrationRoute')
const auth = require('./route/userRoutes')


// Passport config
require('./config/passportConfig')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(logger('dev') )


app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60* 60* 24, // session dead after 24 hour and ask new login
        httpOnly: true, //avoid client-side JS messing with cookies
        sameSite: 'lax'  // avoid CSRF issues

      },
      store: MongoStore.create({ mongoUrl: process.env.DB_String }),
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())


app.use(methodOverride("_method"))

app.use('/', feedPage)
app.use('/admin', organizerRoute) 
app.use('/register', auth)

app.listen(process.env.PORT, ()=>[
    console.log(`Server is running on port ${process.env.PORT}`)
])