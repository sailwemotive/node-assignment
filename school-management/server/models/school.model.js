const mongoose = require('mongoose')


// We dont have to mention collection name i.e. 'schools', 
// because by default mongoose will use plural for 'School' i.e. 'schools'
module.exports = mongoose.model('School', {
    schoolName: { type: String },
    schoolAddress: { type: String },
    schoolPhone: { type: Number }
}
//, 'schools'
)