const User = require('../models/user.model');
const Songs = require('../models/songs.model');
const Reviews = require('../models/reviews.model');
const jwt = require('jsonwebtoken');

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
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) {
            throw err;
        }
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) {
                throw err;
            }
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), 'secret', {
                    expiresIn: 604800 // 1 week
                });

                // return back customer user object without password
                res.json({
                    success: true,
                    token: 'Bearer ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    })
};

exports.validate = function(req, res) {
    res.send('validate');
};

exports.viewMusicCharts = function(req, res) {
    Songs.find((err, songs) => {
        if (err)
            console.log(err);
        else {
            res.json(songs)
        }
    });
};

exports.viewReviews = function(req, res) {
    console.log(req.params)
    Reviews.find({ songId: req.params.songId }, (err, reviews) => {
        if (err)
            console.log(err);
        else {
            console.log(reviews)
            res.json(reviews)
        }
    });
};

exports.addReview = function(req, res) {
    let songReview = new Reviews({
        review: req.body.review,
        rating: req.body.rating
    });
    // save new item
    songReview.save()
        .then(issue => {
            res.status(200).json({ 'songReview': 'Added successfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to create review');
        });
};

exports.viewUsers = function(req, res) {
    User.find((err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user)
        }
    });
};

exports.getUsersById = function(req, res) {
    console.log(req.params.id)
    User.findById(req.params.id, (err, user) => {
        if (err)
            console.log("nope");
        else
            res.json(user);
    })
};

exports.editUser = function(req, res) {
    User.findById(req.params.id, (err, user) => {
        if (!user)
            return next(new Error('Could not load user'));
        else {
            user.name = req.body.name;
            user.email = req.body.email;
            user.username = req.body.username;
            user.status = req.body.status;
            user.authority = req.body.authority;

            user.save().then(user => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
}