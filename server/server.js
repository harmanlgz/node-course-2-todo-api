var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
     var todo = new Todo({
         text: req.body.text
     });
     todo.save().then((doc) => {
        res.send(doc);
     }, (e) => {
        res.status(400).send(e);
     });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

// var newTodo = new Todo({
//     text: 'cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log(`Saved todo ${doc}`);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// var newTodo = new Todo({
//     text: "Eat dessert",
//     completed: false,
//     completedAt: 123456
// });
// newTodo.save().then((doc) => {
//     console.log(`Saved todo ${doc}`);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// var newTodo = new Todo({
//     text: '  Edit this video  '
// });
// newTodo.save().then((doc) => {
//     console.log(`Saved todo ${doc}`);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// User model
// email - require, trim it, set type 'string', set min length of 1
// new user



// var newUser = new User({
//     email: 'harman.lgz@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log('User saved');
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to create new user', e);
// });