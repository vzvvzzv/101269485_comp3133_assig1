const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  listing_title: {
    type: String,
    required: [true, 'Please enter listing title'],
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Please enter description'],
    trim: true,
    lowercase: true
  },
  street: {
    type: String,
    required: [true, 'Please enter street'],
    trim: true,
    lowercase: true
  },
  city: {
    type: String,
    required: [true, 'Please enter city'],
    trim: true,
    lowercase: true
  },
  postal_code: {
    type: String,
    required: [true, 'Please enter postal code'],
    trim: true,
    lowercase: true
  },
  price: {
    type: String,
    required: [true, 'Please enter price'],
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: [true, 'Please enter email'],
    trim: true,
    lowercase: true
  },
  username: {
    type: String,
    required: [true, 'Please enter username'],
    trim: true,
    lowercase: true
  },

});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;