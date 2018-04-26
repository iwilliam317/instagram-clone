const express = require('express'),
          bodyParser = require('body-parser'),
          mongodb = require('mongodb');

const app = express();

app.set('port', 3000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log('Server on!');
})

const db = new mongodb.Db('instagram', new mongodb.Server('localhost', 27017, {}), {})


app.use((error, req, res, next) => {
  res.status(500).send('Sorry! An error has occurred');
  next();
})

app.get('/', (req, res) => {
  res.send({msg: 'hello, welcome!'})
})

app.post('/api', (req, res) => {
  let data = req.body;

  db.open((error, mongoclient) => {
    mongoclient.collection('postagens', (error, collection) => {
      collection.insert(data, (error, result) => {
        if (error){
          res.json(error);
        }
        else{
          res.json(result);
        }

        mongoclient.close();
      });
    })
  })
  // res.send(data);
})