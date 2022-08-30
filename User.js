const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');

const userSchema = mongoose.Schema({
  facebookId: String,
  googleId: String
});
userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', userSchema);