const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  avatar: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  pace: {
    type: String,
  },
  distance: {
    type: String,
  },
  // address: {
  //     street: String,
  //     suite: Number,
  //     city: String,
  //     zipcode: Number,
  // },
  location: {
    type: String,
  },
  picture: {
    type: String,
  },
  post_date: {
    type: Date,
    default: Date.now
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;