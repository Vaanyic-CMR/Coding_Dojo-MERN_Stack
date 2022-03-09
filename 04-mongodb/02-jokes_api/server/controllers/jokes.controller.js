const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( allJokes => res.json({ jokes: allJokes }))
        .catch( error => res.json({ message: "An error has occured: ", error: error }));
};

module.exports.findJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then( oneJoke => res.json({ joke: oneJoke }))
        .catch( error => res.json({ message: "An error has occured: ", error: error }));
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then( newJoke => res.json({ joke: newJoke }))
        .catch( error => res.json({ message: "An error has occured: ", error: error }));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate( {_id: req.params.id}, req.body, {new: true, runValidators:true} )
        .then( updatedJoke => res.json({ joke: updatedJoke }) )
        .catch( error => res.json({ message: "An error has occured: ", error: error }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then( result => res.json({ result: result }))
        .catch( error => res.json({ message: "An error has occured: ", error: error }));
};