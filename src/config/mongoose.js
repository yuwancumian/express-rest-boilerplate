const mongoose = require('mongoose');
const { mongodb_url } = require('./var');

mongoose.connection.on('error', err => {
  console.log(`MongoDB connection error: ${err}`);
  process.exit(-1);
});
mongoose.connection.on('open', () => {
  console.log('connect success!');
});

exports.connect = function() {
  console.log({ mongodb_url });
  mongoose
    .connect(mongodb_url, {
      useCreateIndex: true,
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('mongodb connected');
    });
  // return mongoose.connection;
};
