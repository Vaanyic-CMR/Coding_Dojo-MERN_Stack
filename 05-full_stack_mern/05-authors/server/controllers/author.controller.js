const Author = require("../models/author.model");

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then( authors => res.json(authors) )
        .catch( error => res.json(error) )
};

module.exports.getAuthor = (req, res) => {
    Author.findOne( {_id: req.params.id} )
        .then( author => res.json(author) )
        .catch( error => res.json(error) );
};

module.exports.createAuthor = (req, res) => {
    Author.create( req.body )
        .then( newAuthor => res.json(newAuthor) )
        .catch( error => res.status(400).json(error) );
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate( {_id: req.params.id}, req.body, {new: true} )
        .then( updatedAuthor => res.json({ author: updatedAuthor }) )
        .catch( error => res.status(400).json(error) );
};

module.exports.deleteAuthor = (req, res) => {
    Author.findOneAndDelete( {_id: req.params.id} )
        .then( confirmation => res.json(confirmation) )
        .catch( err => res.json(err) );
};