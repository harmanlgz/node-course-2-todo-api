var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if(env === 'test'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}else if(env === 'production'){
    process.env.MONGODB_URI = 'mongodb+srv://dbuser1:dbuser1@harmanlz-26oe6.mongodb.net/TodoApp?retryWrites=true'
}