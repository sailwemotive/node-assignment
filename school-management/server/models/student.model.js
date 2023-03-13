const mongoose = require('mongoose')


// We dont have to mention collection name i.e. 'students', 
// because by default mongoose will use plural for 'Student' i.e. 'students'
module.exports = mongoose.model('Student', {
    studentFirstName: { type: String },
    studentLastName: { type: String },
    studentRollNumber: { type: Number },
    studentGender: { type: String },
    studentAddress: { type: String },
    studentPhone: { type: Number },
    _schoolId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'School' }]
}
//, 'students'
)