const express = require('express'),
          bodyParser = require('body-parser'),
          mongoDb = require('mongodb');

const app = express();

app.set('port', 3000);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log('Server on!');
})


app.use((error, req, res, next) => {
  next();
})