const FacebookStrategy = require('passport-facebook'),
  User = require('../User');

let options = {
  clientID: process.env.CLIENT_ID_FACEBOOK,
  clientSecret: process.env.CLIENT_SECRET_FACEBOOK,
  callbackURL: `${process.env.BASE_URL}/auth/facebook/callback`
}

function verifyCallback(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ facebookId: profile.id }, (err, user) => {
    return done(err, user);
  });
}

module.exports = new FacebookStrategy(options, verifyCallback);