const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'THE TOUR NAME MUST INSERT'],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true,"Duration need a number."]
  }
  ,maxGroup:{
    type: Number,
    required: [true,"Max of people is needed."]
  },
  ratingAsAverage: {
    type: Number,
    default: 1.5,
  },
  ratingQunatity:{
    type: Number,
    default: 0
  }
  ,
  difficulity: {
    type: String,
    required: [true,"difficulity is required"]
  },
  price: {
    type: Number,
    required: [true, 'YOU MUST SET THE PRICE!'],
  },
  discount: {
    type: Number,
  },
  summery: {
    type: String,
    trim: true
  }
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
