// const User = require('../models/User.js');
const Kudos = require('../models/Kudos.js');

module.exports = function(app) {
    // GET route for all the users
    app.get('/api/users/', function(req, res) {
        User.find({})
            .populate('Kudos')
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            });
    });

    // GET route for all the kudos
    app.get('/api/kudos', function(req, res) {
        Kudos.find({})
            // .populate('User')
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            });
    });

    //POST route for creating new kudos
    app.post('/api/kudos/', function(req, res) {
        // const senderId = req.body.senderId;
        // const receiverId = req.body.receiverId;
        const newEntry = {
            title: req.body.title,
            body: req.body.body,

        }
        Kudos.create(newEntry)
            // .then(function(kudosData) {
            // return User.findOneAndUpdate({ _id: senderId }, { $push: { users: kudosData._id } }, { new: true });
            .then(function(newEntry) {
                res.json(newEntry);
            })
            // .then(function(userData) {
            //     res.json(userData);
            // })
            .catch(function(err) {
                res.json(err);
            });
    });
}