const express = require('express')
const bodyParser = require('body-parser')


//local imports
const connectDb = require('./db.js')
const studentRoutes = require('./controllers/student.controller')
const lecturerRoutes = require('./controllers/lecturer.controller')
const schoolRoutes = require('./controllers/school.controller')

const { errorHandler } = require('./middlewares')


const app = express() 


// Whatever request comes into application its convert into json
// middleware
app.use(bodyParser.json())
app.use('/api/students', studentRoutes)
app.use('/api/lecturers', lecturerRoutes)
app.use('/api/schools', schoolRoutes)


// NOTE: Add error handler after all routes
app.use(errorHandler)



// Database configuration
connectDb()
.then(() => {
    app.listen(3000, 
        () => console.log('server started at 3000')
        )
    console.log('db connection succeeded.')
})
.catch(err => console.log(err))