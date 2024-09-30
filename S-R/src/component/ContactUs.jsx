import { useState } from 'react';
import axios from 'axios';

function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      message
    };

    axios.post('http://localhost:5001/contact', formData)
      .then((response) => {
        console.log(response.data);
        setSuccess(true);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center pt- min-h-screen bg-gradient-to-b from-white to-blue-100">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg shadow-blue-500/50">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">HAVE SOME QUESTIONS?</h1>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <i className="fas fa-globe"></i>
            <span>MOLDOVA</span>
            <a href="#" className="text-blue-500">UK</a>
            <span>:</span>
            <span>Strada 31 August 1989 78, Chisinau, MD-2012</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/9076/9076939.png" className="w-96 h-64" />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="What's your email?"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your questions..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button type="submit"  className="w-full p-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-lg">
                SEND MESSAGE
              </button>
              {success && (
                <div className="text-green-500 mt-4">
                  Message sent successfully!
                </div>
              )}
              {error && (
                <div className="text-red-500 mt-4">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;