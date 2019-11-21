// server.js

const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors');
var path = require('path');
var passport = require('passport');

const route = require('./routes/items.route'); // Imports routes for the users
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://someuser:abcd1234@productstutorial-wzj0e.mongodb.net/Lab5?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(function(req, res, next) {
    req.db = db;
    next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/', route);

app.listen(4000, () => console.log('Express server running on ports 4000'));