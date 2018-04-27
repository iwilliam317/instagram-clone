module.exports._get = (app, req, res) => {
   const connection = app.config.dbConnection;
   // res.json('sdsds')

  let api = new app.app.models.api(connection)
  // res.json('asddas')
   api._get(res);
  // app.get('/api', (req, res) => {
    // db.open((error, mongoclient) => {
    //   mongoclient.collection('postagens', (error, collection) => {
    //     collection.find().toArray((error, result) => {
    //       if(error){
    //         res.json(error)
    //       }
    //       else{
    //         res.json(result);
    //       }

    //       mongoclient.close();
    //     });
    //   })
    // })
  // })
}