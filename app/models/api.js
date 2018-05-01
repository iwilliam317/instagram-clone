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
}


module.exports = () => {
  return Api;
};