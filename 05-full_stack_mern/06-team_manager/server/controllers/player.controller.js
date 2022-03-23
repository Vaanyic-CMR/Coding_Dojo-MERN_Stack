const Player = require("../models/player.model");

module.exports.getAll = (_req, res) => {
    Player.find({})
        .then( players => res.json(players) )
        .catch( error => res.json(error) )
};

module.exports.getById = (req, res) => {
    Player.findOne( {_id: req.params.id} )
        .then( player => res.json(player) )
        .catch( error => res.json(error) );
};

module.exports.create = (req, res) => {
    Player.create( req.body )
        .then( player => res.json(player) )
        .catch( error => res.status(400).json(error) );
};

module.exports.update = (req, res) => {
    Player.findOneAndUpdate( {_id: req.params.id}, req.body, {new: true} )
        .then( updatedPlayer => res.json({ player: updatedPlayer }) )
        .catch( error => res.status(400).json(error) );
};

module.exports.deleteById = (req, res) => {
    Player.findOneAndDelete( {_id: req.params.id} )
        .then( confirmation => res.json(confirmation) )
        .catch( error => res.json(error) );
};