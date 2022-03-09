const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_api", { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log("Established connection to jokes_api database"))
    .catch( error => console.log("Failed to connect to jokes_api database:", error) );