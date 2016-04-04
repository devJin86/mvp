/* Server */
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 7777;
var mongoose = require('mongoose');

/* Static */
app.use(express.static(path.join(__dirname, "../clients/static/")));
app.use(express.static(path.join(__dirname, "../clients/app/")));
/* middlewares */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.set('views', path.join(__dirname, '../clients/'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/* DB Schema */
mongoose.connect('mongodb://localhost/blogs');
var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  updated_at: {
    type: Date,
    required: true
  }  
});
/* Before saving the data run this method */
UserSchema.pre('save', function(next) {
  var now = new Date();

  if(!created_at) {
    created_at = now;
  }
  this.updated_at = now;
  next();
});

/* Routes */
app.get('/', function(req, res) {
  console.log(__dirname, path);
 res.render("index");
})

app.post('/api/createUsers', function(req, res) {
 console.log("POST DATA", req.body);
 res.redirect('/');
});

app.listen(8000, function() {
 console.log("listening on port 8000");
})