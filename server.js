const express = require("express")
const exphbs = require("express-handlebars")
const methodOverride = require("method-override")
const bodyParser = require("body-parser")
// Create an instance of the express app.
var app = express();

// Specify the port.
var port = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));	
app.use(methodOverride("_method"));

const routes = require("./controllers/burgers_controller.js")
app.use("/", routes)
app.listen(port)
