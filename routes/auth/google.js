const router = require('express').Router(),
  passport = require('passport');

// Google OAuth and Callback routes

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/signin', successRedirect: '/secret' }));

module.exports = router;