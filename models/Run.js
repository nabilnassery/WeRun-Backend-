const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const runSchema = new Schema({
  User: {
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
  run_date: {
    type: Date,
    default: Date.now
  },
});

const Run = mongoose.model('Run', runSchema);

module.exports = Run;