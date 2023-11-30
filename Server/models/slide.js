const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },

  

  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,  // Specify the field type
    required: true,
  },
  category: {
    type: String,
    enum: ['Food', 'Travel', 'education', 'movies', 'health and fitness'],
    required: true,
  },
});

module.exports = mongoose.model('Slide', slideSchema);
