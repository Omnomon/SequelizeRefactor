var db = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function(app) {
    app.get("/", function(req, res) {
        console.log("get home page")
        db.burger.findAll({}).then(function(data) {
            var hbsObject = {
                burger: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    app.post("/", function(req, res) {
      console.log(req.body)
        db.burger.create(req.body).then(function(data) {
            res.redirect("/");
        });
    });

    app.put("/:id", function(req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);

        db.burger.update(
          req.body,
        {
          where: {
            id: req.params.id
          }
        }).then(data=>{
          res.redirect("/")
        })

    });

    app.delete("/:id?", function(req, res) {
      db.burger.destroy({
        where: {
          id: req.params.id
        }
      }).then(data=>{
        res.redirect("/")
      })
    })
}


// Export routes for server.js to use.