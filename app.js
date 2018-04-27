const app = require('./config/server');

app.get('/', async(req, res) => {
  res.send({msg: 'hello, welcome!'})
})

const db = app.config.dbConnection();
// POST
app.post('/api', (req, res) => {
  let data = req.body;

  db.open((error, mongoclient) => {
    mongoclient.collection('postagens', (error, collection) => {
      collection.insert(data, (error, result) => {
        if (error){
          res.json({'status': 'Error'});
        }
        else{

          res.json({'status': 'Ok'});
        }

        mongoclient.close();
      });
    })
  })
})

app.get('/api', (req, res) => {
  db.open((error, mongoclient) => {
    mongoclient.collection('postagens', (error, collection) => {
      collection.find().toArray((error, result) => {
        if(error){
          res.json(error)
        }
        else{
          res.json(result);
        }

        mongoclient.close();
      });
    })
  })
})

// SHOW
// app.get('/api/:id', (req, res) => {
//   let id = req.params.id;
//   mongoclient.collection('postagens', (error, collection) => {
//     collection.find({)
//   })

// })