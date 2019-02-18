var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
process.env.MONGODB_URI = 'mongodb+srv://dbuser1:dbuser1@harmanlz-26oe6.mongodb.net/TodoApp?retryWrites=true';
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dbuser1:dbuser1@harmanlz-26oe6.mongodb.net/TodoApp?retryWrites=true');

module.exports = {mongoose};