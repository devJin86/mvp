/* Server */
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 7777;

/* Static */
app.use(express.static(path.join(__dirname, "clients/static/")));
app.use(express.static(path.join(__dirname, "clients/app/")));
/* middlewares */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.set('views', path.join(__dirname, 'clients/'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



/* Routes */
app.get('/', function(req, res) {
  console.log(__dirname, path);
 res.render("index");
})

// app.post('/users', function(req, res) {
//  console.log("POST DATA", req.body);
//  res.redirect('/');
// });

app.listen(8000, function() {
 console.log("listening on port 8000");
})