const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  pace: {
    type: String,
  },
  distance: {
    type: String,
  },
  location: {
    type: String,
  },
  post_date: {
    type: Date,
    default: Date.now
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;