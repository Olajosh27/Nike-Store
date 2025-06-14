import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    console.log('Form data submitted:', formData);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    } finally {
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          Contact <span className="text-red-600">OLASTORE</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          We'd love to hear from you! Reach out to us for any inquiries, feedback, or support.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Olanrewaju Joshua"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="olanrewaju24@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Inquiry about an order, General feedback, etc."
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 resize-y"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          {formStatus === 'sending' && (
            <p className="text-blue-600 text-center font-semibold">Sending your message...</p>
          )}
          {formStatus === 'success' && (
            <p className="text-green-600 text-center font-semibold">Message sent successfully! We'll get back to you soon.</p>
          )}
          {formStatus === 'error' && (
            <p className="text-red-600 text-center font-semibold">Failed to send message. Please try again later or email us directly.</p>
          )}

          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className="
              w-full py-3 px-6 rounded-lg font-semibold text-lg
              bg-red-600 text-white
              hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75
              transition duration-300 ease-in-out
              ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}
            "
          >
            {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;