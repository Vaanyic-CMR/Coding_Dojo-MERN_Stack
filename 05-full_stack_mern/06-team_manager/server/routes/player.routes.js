const PlayerController = require("../controllers/player.controller");

module.exports = app => {
    app.get("/api/players", PlayerController.getAll );
    app.post("/api/players", PlayerController.create );
    app.get("/api/players/:id", PlayerController.getById );
    app.put("/api/players/:id", PlayerController.update );
    app.delete("/api/players/:id", PlayerController.deleteById );
}