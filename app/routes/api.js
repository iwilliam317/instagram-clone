module.exports = (app) => {


    // const db = app.config.dbConnection();
    // POST
    // app.post('/api', (req, res) => {
    //   let data = req.body;

    //   db.open((error, mongoclient) => {
    //     mongoclient.collection('postagens', (error, collection) => {
    //       collection.insert(data, (error, result) => {
    //         if (error){
    //           res.json({'status': 'Error'});
    //         }
    //         else{

    //           res.json({'status': 'Ok'});
    //         }

    //         mongoclient.close();
    //       });
    //     })
    //   })
    // })

    app.post('/api', (req, res) => {
      let data = req.body;
      app.app.controllers.api.methodPost(app, req, res, data)
    })

    app.get('/api', (req, res) => {
      app.app.controllers.api.methodGet(app, req, res);
    })

    // SHOW
    // app.get('/api/:id', (req, res) => {
    //   let id = req.params.id;
    //   mongoclient.collection('postagens', (error, collection) => {
    //     collection.find({)
    //   })

    // })
}