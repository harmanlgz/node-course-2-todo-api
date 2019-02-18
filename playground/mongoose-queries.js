const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c6a4b2ff2f6363891f6318311';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// User.findById
//user not found
//user found
//errors
User.findById('5c669fe550b915486db4a73b').then((user) => {
    if(!user){
        return console.log('user not found');
    }
    console.log('User', user);
}).catch((e) => console.log(e));