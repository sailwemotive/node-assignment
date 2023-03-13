const mongoose = require('mongoose')
 
const dbUri = 'mongodb+srv://admin:1234@cluster0.59zqasc.mongodb.net/student_db?retryWrites=true&w=majority'


// To remove depreciation warning messages
mongoose.set('strictQuery', false)


module.exports = () =>{
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true})
}