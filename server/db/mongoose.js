var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://cloud.mongodb.com/v2/5c38729ff2a30b1794299723#metrics/replicaSet/5c387680cf09a229be557a73/explorer/todoapp');

module.exports = {mongoose};