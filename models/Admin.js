const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please enter username'],
    trim: true,
    lowercase: true
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true,
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  type: {
    type: String,
    required: true,
    enum: ['admin', 'customer'],
    trim: true,
    lowercase: true
  },
  
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;