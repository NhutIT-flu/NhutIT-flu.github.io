import React, { useState } from 'react';
import contactIllustration from "@assets/avatartouch.png";

interface ContactFormProps {
  id?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ id }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8 shadow-professional rounded-lg" id={id}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-navy-primary">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal-primary">Your name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="What's your good name?" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-charcoal-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-professional-blue focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal-primary">Your Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="What's your email address?" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-charcoal-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-professional-blue focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal-primary">Your Message</label>
              <textarea 
                id="message" 
                rows={6} 
                placeholder="How can I help you?" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-charcoal-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-professional-blue focus:border-transparent"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-professional-blue hover:bg-navy-primary text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
            </button>
            {isSuccess && (
              <p className="text-center text-green-600 mt-4">Message sent successfully!</p>
            )}
            {isError && (
              <p className="text-center text-red-600 mt-4">Failed to send message. Please try again later.</p>
            )}
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img 
            src={contactIllustration} 
            alt="Contact Illustration" 
            className="rounded-lg shadow-lg object-cover max-h-[500px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 