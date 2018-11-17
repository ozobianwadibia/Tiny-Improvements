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
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            });
    });

    //POST route for creating new kudos
    app.post('/api/kudos/', function(req, res) {
        const newEntry = {
            sender: req.body.sender,
            receiver: req.body.receiver,
            title: req.body.title,
            body: req.body.body
        }
        Kudos.create(newEntry)
            .then(function(newEntry) {
                res.json(newEntry);
            })
            .catch(function(err) {
                res.json(err);
            });
    });
}