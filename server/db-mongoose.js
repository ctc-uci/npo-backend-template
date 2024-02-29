// FIXME: keep file only if using mongodb
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongoConnection = mongoose.connection;
mongoConnection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

module.exports = mongoose;
