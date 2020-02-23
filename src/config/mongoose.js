const mongoose = require('mongoose');

const url = 'mongodb://localhost:27018'

exports.connect = function() {
  console.log('start mongo')
  mongoose.connect(url, {
    useCreateIndex: true,
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
    .then(()=>{console.log('mongodb connected')})
  return mongoose.connection;
}
