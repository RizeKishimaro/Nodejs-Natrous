const morgan = require('morgan');
const express = require('express');
const app = express();
const tourRouters = require('./routes/tourRoutes');
const userRouters = require('./routes/userRoutes');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log("I'M MIDDLEWARE!");
  req.requestTime = new Date().toISOString();
  next();
});



///CONTROLLERS

//TOURS ROUTES....

///USERS ROUTES

///ROUTERS

app.use('/api/v1/users', userRouters);
app.use('/api/v1/tours', tourRouters);
///ROUTES

module.exports = app;
