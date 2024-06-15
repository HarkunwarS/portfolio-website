import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="max-w-lg w-full bg-white dark:bg-primary rounded shadow-md p-5">
        <h2 className="text-2xl font-bold mb-5 text-black dark:text-white">Contact Me</h2>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mt-1 bg-white dark:bg-primary text-black dark:text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Your Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mt-1 bg-white dark:bg-primary text-black dark:text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Please enter your email along with the message'
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mt-1 bg-white dark:bg-primary text-black dark:text-white" required></textarea>
        </div>
        <div className="flex justify-between items-center">
          <button type="submit" className="bg-secondary text-white px-4 py-2 rounded hover:bg-green-600">Send</button>
          <button type="button" onClick={onClose} className="text-red-500">Close</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;