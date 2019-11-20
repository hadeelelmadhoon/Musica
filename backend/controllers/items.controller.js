const User = require('../models/user.model');

exports.welcome = function(req, res) {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' })
        } else {
            res.json({ success: true, msg: 'User registered' })
        }
    });
};

exports.authenticate = function(req, res) {
    res.send('auth');
};

exports.viewMusicCharts = function(req, res) {
    res.send('chart');
};

exports.validate = function(req, res) {
    res.send('validate');
};