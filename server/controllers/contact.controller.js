const Contact = require('../models/contact.model');

exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: 'Contact created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating contact' });
  }
};