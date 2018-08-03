// Creating the server to Lister
var express = require("express");
var bodyParser = require("body-parser");

// creating the port and express app
var PORT = process.env.PORT || 3500;
var app = express();

// parsing the body using body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// requiring the files for our app
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// listening on the port
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

