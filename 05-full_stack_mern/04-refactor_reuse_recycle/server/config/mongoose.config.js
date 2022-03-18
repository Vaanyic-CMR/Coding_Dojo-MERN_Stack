const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_manager", { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log("Connection to database successful."))
    .catch( err => console.log("An Error occured when connection to the database:", err));
