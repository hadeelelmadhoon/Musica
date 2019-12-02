const express = require('express');
const router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken');

// add express validator for server side sanitization
const { check, validationResult } = require('express-validator');

// Require the controllers
const items_controller = require('../controllers/items.controller');

// route for registration
router.post('/', [
    check('name').not().isEmpty().trim().escape(),
    check('username').not().isEmpty().trim().escape(),
    check('email').not().isEmpty().trim().escape(),
    check('password').not().isEmpty().trim().escape(),
], items_controller.welcome);

// route for login authentication
router.post('/authenticate', [
    check('username').not().isEmpty().trim().escape(),
    check('password').not().isEmpty().trim().escape()
], items_controller.authenticate);

// route to get music charts
router.get('/charts', items_controller.viewMusicCharts);

// route to add a new song
router.post('/charts/add', items_controller.addSong);

// route to view songs for admin user
router.get('/songs', items_controller.viewSongs);

// route to edit hidden property for admin user
router.post('/songs/edit/:id', items_controller.editHidden);

// route to validate registration inputs
router.get('/validate', items_controller.validate);

// route to view reviews for a specific song
router.get('/reviews/:songId', items_controller.viewReviews);

// route to get most recent review for a song
router.get('/reviews/recent/:songId', items_controller.viewTopReview);

// route to add a new review
router.post('/reviews/add/:songId', [
    check('review').not().isEmpty().trim().escape()
], passport.authenticate('jwt', { session: false }), items_controller.addReview);

// route to view all users for admin user
router.get('/users', items_controller.viewUsers);

// route that is used to edit users
router.get('/users/:id', items_controller.getUsersById);

// route to edit users
router.post('/users/update/:id', items_controller.editUser);

// route to verify email
router.get('/verify/:email', items_controller.verify)

// route to get policies 
router.get('/policy/:type', items_controller.viewPolicy);

module.exports = router;