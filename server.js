var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var todos = require('./routes/todos');

// lets the port be set by Heroku
var port = process.env.PORT || 8080;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));    //angular folder

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));  //false: string or array, true: any type

app.use('/', index);
app.use('/api/v1', todos);

//app.listen(3000, function(){
  //new app.listen for Heroku
  app.listen(port, function(){
  console.log('Server is running on: ' + port);
});