const express = require('express');
const router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken');

// add express validator for server side sanitization
const { check, validationResult } = require('express-validator');

// Require the controllers
const items_controller = require('../controllers/items.controller');

router.post('/', [
    check('name').not().isEmpty().trim().escape(),
    check('username').not().isEmpty().trim().escape(),
    check('email').not().isEmpty().trim().escape(),
    check('password').not().isEmpty().trim().escape(),
], items_controller.welcome);

router.post('/authenticate', [
    check('username').not().isEmpty().trim().escape(),
    check('password').not().isEmpty().trim().escape()
], items_controller.authenticate);

router.get('/charts', items_controller.viewMusicCharts);

router.post('/charts/add', [
    check('track').trim().escape(),
    check('year').trim().escape()
], items_controller.addSong);

router.get('/validate', items_controller.validate);

router.get('/reviews/:songId', items_controller.viewReviews);

router.get('/reviews/recent/:songId', items_controller.viewTopReview);

router.post('/reviews/add/:songId', [
    check('review').not().isEmpty().trim().escape()
], passport.authenticate('jwt', { session: false }), items_controller.addReview);

router.get('/users', items_controller.viewUsers);

router.get('/users/:id', items_controller.getUsersById);

router.post('/users/update/:id', items_controller.editUser);

module.exports = router;