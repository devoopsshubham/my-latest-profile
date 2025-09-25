
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., API call)
    setSubmitted(true);
  };

  return (
    <SectionWrapper title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          Want to work together? Let’s discuss your project & bring it to life.
        </p>

        {submitted ? (
          <div className="bg-green-900/50 border border-green-500 text-green-300 px-4 py-3 rounded-lg" role="alert">
            <strong className="font-bold">Thank you!</strong>
            <span className="block sm:inline"> Your message has been sent. I'll get back to you soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Project Details"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg shadow-cyan-500/20"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Contact;
