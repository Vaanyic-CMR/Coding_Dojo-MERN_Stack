const express = require("express");
const app = express();

require("./config/mongoose.config");

app.use( express.json(), express.urlencoded({ extended: true }));

const JokesRoutes = require("./routes/jokes.routes");
JokesRoutes(app);

app.listen( 8000, () => console.log("The server has started on port 8000") );