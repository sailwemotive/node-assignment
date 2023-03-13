const mongoose = require('mongoose')

const Student = require('./student.model')

// We dont have to mention collection name i.e. 'lecturers', 
// because by default mongoose will use plural for 'Lecturer' i.e. 'lecturers'
module.exports = mongoose.model('Lecturer', {
    lecturerFirstName: { type: String },
    lecturerLastName: { type: String },
    lecturerPhone: { type: Number },
    _schoolId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'School' }]
}
//, 'lecturers'
)