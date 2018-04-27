const express = require('express');
const  bodyParser = require('body-parser');
const consign = require('consign');
// var expressValidator = require('express-validator');

const app = express();

app.set('port', 3000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(expressValidator());

app.listen(app.get('port'), () => {
  console.log('Server on!');
});

app.use((error, req, res, next) => {
  res.status(500).send('Sorry! An error has occurred');
  next();
})

consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .into(app)

module.exports = app;
