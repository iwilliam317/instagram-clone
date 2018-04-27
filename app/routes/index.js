module.exports = (application) => {
  application.get('/', async(req, res) => {
    res.send({msg: 'hello, welcome!'})
  })
  
}
