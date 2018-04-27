class Api {
  constructor(connection){
    this._connection = connection();
  }

  _get(res){
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
}

module.exports = () => {
  return Api;
};