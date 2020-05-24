const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  givenName: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('user', UserSchema);