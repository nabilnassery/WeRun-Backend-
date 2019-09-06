const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  signup_date: {
    type: Date,
    default: Date.now
  },
  level: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   name: {
//     type: String,
//   },
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   signup_date: {
//     type: Date,
//     default: Date.now
//   },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
