// const mongoose = require('mongoose');

// const courseSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: String,
//   premiumOfferings: Boolean,
//   jobAssistance: String,
//   admissionStatus: String,
//   tags: [String]
// });

// module.exports = mongoose.model('Course', courseSchema);





const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String
});

module.exports = mongoose.model('Contact', contactSchema);