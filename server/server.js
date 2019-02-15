var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
    // var todo = new Todo({
    //     text: req.body.text
    // });
    // todo.save().then((doc) => {
    //     res.send(doc);
    // }, (e) => {
    //     res.status(400).send(e);
    // });

    var todo1 = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });
    todo1.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

// var newTodo =  new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// var newTodo = new Todo({
//     text: true,
//     // completed: false,
//     // completedAt: 1
// });

// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unabe to save todo', e);
// });

// Users
// email - require, trim, set type string, set min length of 1


// var user1 = new User({
//     email: ' harman.lgzz@gmail.com  '
// });
// user1.save().then((doc) => {
//     console.log('Saved user1', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });