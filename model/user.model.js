const  mongoose = require('mongoose')
  , Schema = mongoose.Schema;

const userSchema = new Schema({
    // my props
    username: {
        type: String,
        required: true
    },
    appliedLeaves: {
        type: Number,
        required: true
    },
    casualLeaves: {
        type: Number,
        default: 10
    },
    plannedLeaves: {
        type: Number,
        default: 20
    }
});

module.exports = mongoose.model('User', userSchema);