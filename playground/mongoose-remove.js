const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((results) => {
//     console.log(results);
// });

// Todo.findOneAndRemove;
// Todo.findByIdAndRemove;

Todo.findOneAndRemove({_id: '5c6aa30ad961d926f125be50'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('5c6aa306d961d926f125be4f').then((todo) => {
//     console.log(todo);
// });