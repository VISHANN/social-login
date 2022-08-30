const express = require('express'),
      passport= require('passport'),
      session = require('express-session'),
      mongoose = require('mongoose');

// Loading .env
require('dotenv').config();

const app = express();      


// Connecting to Database
mongoose.connect('mongodb://localhost/socialLogin', { useUnifiedTopology: true, useNewUrlParser: true });

// Importing User model
const User = require('./User');

// Bombing Databse
require('./seed')(User);


// Setting ejs as view engine for app
app.set('view engine', 'ejs');

// Config express-session
app.use(session({
  secret: 'Navisha Khatri',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
// Authenticating passport session
app.use(passport.session());

// Passport-Config serialize and deserializeUser
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Importing Strategies
const googleStrategy = require('./passport/passport-google-oauth20'),
  facebookStrategy = require('./passport/passport-facebook');

// Importing Routes
const googleAuthRoutes = require('./routes/auth/google'),
  facebookAuthRoutes = require('./routes/auth/facebook');

// Passport Strategy Config
passport.use(googleStrategy);
passport.use(facebookStrategy);

// -------------------------------------------------------- Middlewares-----------------------------

function isLoggedIn(req, res, next) {
  return (req.isAuthenticated()) ? next() : res.redirect('/failure');
}

// -------------------------------------------------------- Routes----------------------------------

app.use(googleAuthRoutes);
app.use(facebookAuthRoutes);

app.get('/signin', (req, res) => {
  res.render('login.ejs');
});

app.get('/secret', isLoggedIn, function(req, res) {
  console.log(req.user);
      res.send("Now you have my secret !");
});

// -------------------------------------------------------- Server Config-----------------------------

// Configuring server
app.listen(process.env.PORT, err => {
  if(err) console.log(err);

  console.log('Server listening on port' + process.env.PORT);
})