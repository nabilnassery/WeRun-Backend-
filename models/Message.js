const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  Post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  comment: {
    type: String,
  },
  message_date: {
    type: Date,
    default: Date.now
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;