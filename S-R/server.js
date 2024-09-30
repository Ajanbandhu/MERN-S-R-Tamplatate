import express from 'express';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
const jsonParser = bodyParser.json();
app.use(jsonParser);

// MongoDB connection
connect('mongodb://localhost:27017/S-R', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log(err));

// Create a schema and model for contact form submissions
const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

const Contact = model('Contact', contactSchema);

// POST route to handle form submission
app.post('/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    const newContact = new Contact({ firstName, lastName, email, message });
    await newContact.save();
    res.status(200).send('Message received!');
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Error saving data. Please try again later.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});