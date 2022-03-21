const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: [ true, "Author must have a name" ],
        minlength: [ 3, "Name must be greater than 3 characters." ]
    }
}, { timestamps: true } );

// Pre hook for `findOneAndUpdate`
AuthorSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model( "Author", AuthorSchema );