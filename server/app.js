var createError = require('http-errors');
var express = require('express');
var path = require('path');
var apiRouter = require('./routes/apiRoutes');
var app = express();
var cors = require('cors');  

// view engine setup
//const expressHandlebars = require("express-handlebars");
//const hbs = expressHandlebars.create({ defaultLayout: "application" });
//app.engine("handlebars", hbs.engine);
//app.set('view engine', "handlebars");
//app.set('views', path.join(__dirname, 'views'));
app.options('*', cors()); // needed during dev on port 3000 after login to server on port 8080

app.use(express.json()); 

//CORS Middleware
app.use(function (req, res, next) {
  //Enabling CORS 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, access-control-request-headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, authorization, X-Auth-Token, X-Accept-Charset,X-Accept");  
  next();
});

app.use('/api', cors({origin: '*'}), apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Catch other errors...
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = err;
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
