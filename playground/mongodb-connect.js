// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Harman', age: 33};
// var {name} = user;
// console.log(name);
// console.log(user.name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do 1',
    //     completed: false
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert todo', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // //insert new doc into the Users collection : (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Harman Singh',
    //     age: 33,
    //     location: 'Mohali'
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user: ', error);
    //     }  
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});