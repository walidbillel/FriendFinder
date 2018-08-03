// Creating the server to Lister
var express = require("express");
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 3500;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

