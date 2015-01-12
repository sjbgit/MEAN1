var mongoose = require('mongoose')
mongoose.connect('mongodb://test:test@ds029837.mongolab.com:29837/multivision', function () {
  console.log('mongodb connected')
})
module.exports = mongoose