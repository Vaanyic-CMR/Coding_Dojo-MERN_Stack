const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Author must have a name" ],
        minlength: [ 2, "Name must be greater than 2 characters." ]
    },
    preferredPosition: {
        type: String,
        required: false
    },
    status: {
        type: String,
        default: "Undecided"
    }
}, { timestamps: true });

// Pre hook for `findOneAndUpdate`
PlayerSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model('Player', PlayerSchema);