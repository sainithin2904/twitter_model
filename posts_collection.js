const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true //This column is indexed fro 
  },
  text: { 
    type: String, 
    required: true,
    maxlength: 280 // Assuming a maximum length for a tweet
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    index: true // Adding index for faster sorting by creation date
  }
});

const Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;
