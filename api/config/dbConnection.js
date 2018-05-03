const mongodb = require('mongodb');

const connection = () => {
  return new mongodb.Db('instagram', new mongodb.Server('localhost', 27017, {}), {})
} 

module.exports = () => {
  return connection;
}