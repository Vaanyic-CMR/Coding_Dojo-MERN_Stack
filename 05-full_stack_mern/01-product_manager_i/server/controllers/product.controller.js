const Product = require("../models/product.model");

module.exports.index = (_req, res) => res.json({ message: "Hello World!" })

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then( newProduct => res.json(newProduct))
        .catch( err => res.json({ message: "An Error occured:", error: err }));
};