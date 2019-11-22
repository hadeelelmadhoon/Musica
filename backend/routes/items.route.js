const express = require('express');
const router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken');

// add express validator for server side sanitization
const { check, validationResult } = require('express-validator');

// Require the controllers
const items_controller = require('../controllers/items.controller');

router.post('/', [
    check('name').not().isEmpty().trim().escape().withMessage('Title must not be empty'),
    check('type', 'Please pick item type').not().isEmpty()
], items_controller.welcome);
router.post('/authenticate', items_controller.authenticate);
router.get('/charts', items_controller.viewMusicCharts);
router.get('/validate', items_controller.validate);
router.get('/reviews', items_controller.viewReviews);
router.post('/addReview', passport.authenticate('jwt', { session: false }), items_controller.addReview);

module.exports = router;