const express = require('express');
const  bodyParser = require('body-parser');
const consign = require('consign');
const multiparty = require('connect-multiparty');
// var expressValidator = require('express-validator');

const app = express();

app.set('port', 3000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(multiparty());


app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// app.use(expressValidator());

consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .then('app/controllers')
  .into(app)

module.exports = app;
