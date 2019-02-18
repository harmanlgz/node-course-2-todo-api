var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
mongodb://username:password@host:port/database
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dbuser1:dbuser1@harmanlz-26oe6.mongodb.net/TodoApp?retryWrites=true');

module.exports = {mongoose};