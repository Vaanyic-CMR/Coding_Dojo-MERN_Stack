const Product = require("../models/product.model");

module.exports.index = (_req, res) => res.json({ message: "Hello World!" })

module.exports.createProduct = (req, res) =>
    Product.create(req.body)
        .then( newProduct => res.json(newProduct))
        .catch( err => res.json({ message: "An Error occured:", error: err }));

module.exports.getAllProducts = (req, res) =>
    Product.find({})
        .then( products => res.json(products) )
        .catch( err => { console.log(err); res.json(err); } );

module.exports.getProduct = (req, res) => 
    Product.findOne( {_id: req.params.id} )
        .then( product => res.json(product) )
        .catch( err => res.json(err) );

