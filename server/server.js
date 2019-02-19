require('./config/config');

const _ = require('lodash');
const {ObjectId} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch((e) => res.status(400).send());
    //validate Id using isValid
        // 404 - send back empty send
    //findbyId
        // success
            // if todo - send it back
            // if no todo - send back 404 with empty body
        //error
            //404 - send empty body back

    // res.send(req.params);
})

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch((e) => res.status(400).send());
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']); // setting fillable fields

    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
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

module.exports = {app};