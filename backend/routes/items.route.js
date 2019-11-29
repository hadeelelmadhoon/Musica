const express = require('express');
const router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken');

// add express validator for server side sanitization
const { check, validationResult } = require('express-validator');

// Require the controllers
const items_controller = require('../controllers/items.controller');

// router.post('/', [
//     check('name').not().isEmpty().trim().escape(),
//     check('username').not().isEmpty().trim().escape(),
//     check('email').not().isEmpty().trim().escape()
// ], items_controller.welcome);
router.post('/', items_controller.welcome);
router.post('/authenticate', items_controller.authenticate);
router.get('/charts', items_controller.viewMusicCharts);
router.get('/validate', items_controller.validate);
router.get('/reviews/:songId', items_controller.viewReviews);
//router.post('/addReview', passport.authenticate('jwt', { session: false }), items_controller.addReview);
router.post('/reviews/add/:songId', items_controller.addReview);
router.get('/users', items_controller.viewUsers); //add authentication
router.get('/users/:id', items_controller.getUsersById); //add authentication
router.post('/users/update/:id', items_controller.editUser); //add authentication


module.exports = router;