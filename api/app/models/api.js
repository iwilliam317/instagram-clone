const ObjectId = require('mongodb').ObjectId;

class Api {
  constructor(connection){
    this._connection = connection();
  }

  methodGet(response){
      this._connection.open((error, mongoclient) => {
        mongoclient.collection('postagens', (error, collection) => {
                collection.find().toArray((error, result) => {
                  if(error){
                    response.json(error)
                  }
                  else{
                    response.json(result);
                  }

                  mongoclient.close();
                });
              })
      })

  }

  methodPost(response, data){
      this._connection.open((error, mongoclient) => {
        mongoclient.collection('postagens', (error, collection) => {
          collection.insert(data, (error, result) => {
            if (error){
              response.json({'status': 'Error'});
            }
            else{

              response.json({'status': 'Ok'});
            }

            mongoclient.close();
          });
        })
      })
  }

  methodShow(response, id){
    this._connection.open((error, mongoclient) => {
      mongoclient.collection('postagens', (error, collection) => {
        collection.find( {_id : ObjectId(id)}).toArray((error, result) => {
          if(error){
            response.json(error);
          }
          else{
            response.json(result);
          }
        })
      })
    })
  }

  methodPut(request, response, id){
    this._connection.open((error, mongoclient) => {
      mongoclient.collection('postagens', (error, collection) => {
        collection.update( 
          {_id : ObjectId(id)},
          { $set : { titulo: request.body.titulo}},
          {},
          (error, result) => {
            if(error){
              response.json(error);
            }
            else{
              response.json(result);
            }
          }
          )
        })
      })
  }
  
  methodDelete(request, response, id){
      this._connection.open((error, mongoclient) => {
          mongoclient.collection('postagens', (error, collection) => {
              collection.remove(
              {_id: ObjectId(id)},
              true,
              (error, result) => {
                if(error){
                  response.json(error);
                }
                else{
                  response.status(200).json(result);
                }
              });
          })
      })
  }
}


module.exports = () => {
  return Api;
};