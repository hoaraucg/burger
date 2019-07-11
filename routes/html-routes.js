var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burgers.findAll({}).then(function(dbBurgers) {
            res.render("index", {
                burgers: dbBurgers
            });
        })
    })
};
