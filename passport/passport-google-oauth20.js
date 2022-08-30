const GoogleStrategy = require('passport-google-oauth20'),
  User = require('../User');

let options = {
  clientID: process.env.CLIENT_ID_GOOGLE,
  clientSecret: process.env.CLIENT_SECRET_GOOGLE,
  callbackURL: `${process.env.BASE_URL}/auth/google/callback`
}

function verifyCallback(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ googleId: profile.id }, (err, user) => {
    return done(err, user);
  });
}

module.exports = new GoogleStrategy(options, verifyCallback);