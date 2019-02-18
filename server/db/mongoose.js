var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://dbuser1:dbuser1@harmanlz-shard-00-00-26oe6.mongodb.net:27017,harmanlz-shard-00-01-26oe6.mongodb.net:27017,harmanlz-shard-00-02-26oe6.mongodb.net:27017/test?ssl=true&replicaSet=harmanlz-shard-0&authSource=admin&retryWrites=true');

module.exports = {mongoose};