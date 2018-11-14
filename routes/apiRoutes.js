const User = require('../models/User.js');
const Kudos = require('../models/Kudos.js');

module.exports = function(app) {
    // GET route for all the users
    app.get('/api/users/', function(req, res) {
        User.find()
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            });
    });

    // GET route for all the kudos
    app.get('/api/kudos', function(req, res) {
        Kudos.find({ _id: req.params.id })
            .populate('notes')
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            });
    });

    //POST route for creating new kudos
    app.post('/api/kudos', function(req, res) {
        const title = req.body.title;
        const newEntry = {
            title: req.body.title,
            body: req.body.body
        }
        Kudos.create(newEntry)
            .then(function(noteData) {
                return User.findOneAndUpdate({ _id: userId }, { $push: { notes: noteData._id } }, { new: true });
            })
            .then(function(userData) {
                res.json(userData);
            })
            .catch(function(err) {
                res.json(err);
            });
    });
}