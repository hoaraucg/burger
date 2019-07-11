var db = require("../models");

module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    db.Burgers.findAll({}).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbBurgers) {
      res.json(dbBurgers);
    })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurgers) {
      res.json(dbBurgers);
    });

  });

  app.put("/api/burgers/:id", function(req, res) {
    console.log(req.body)
    db.Burgers.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurgers) {
      res.json(dbBurgers);
    })
      .catch(function(err) {
        res.json(err);
      });
  });
}