const router = require('express').Router(),
  passport = require('passport');

// Google OAuth and Callback routes

router.get('/auth/facebook',
  passport.authenticate('facebook'));

router.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/signin', successRedirect: '/secret' }));

module.exports = router;