const ObjectId = require('mongodb').ObjectId;

class Api {
  constructor(connection){
    this._connection = connection();
  }

  methodGet(res){
      this._connection.open((error, mongoclient) => {
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

  }

  methodPost(res, data){
      this._connection.open((error, mongoclient) => {
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
  }

  methodShow(res, id){
    this._connection.open((error, mongoclient) => {
      mongoclient.collection('postagens', (error, collection) => {
        collection.find( {_id : ObjectId(id)}).toArray((error, result) => {
          if(error){
            res.json(error);
          }
          else{
            res.json(result);
          }
        })
      })
    })
  }

  methodPut(req, res, id){
    this._connection.open((error, mongoclient) => {
      mongoclient.collection('postagens', (error, collection) => {
        collection.update( 
          {_id : ObjectId(id)},
          { $set : { titulo: req.body.titulo}},
          {},
          (error, result) => {
            if(error){
              res.json(error);
            }
            else{
              res.json(result);
            }
          }
          )
        })
      })
  }

}


module.exports = () => {
  return Api;
};