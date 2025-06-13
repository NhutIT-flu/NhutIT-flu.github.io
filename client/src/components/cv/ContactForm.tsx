import React, { useState } from 'react';
import contactIllustration from "@assets/avatartouch.png";

interface PropsFormLiênHệ {
  id?: string;
}

const FormLiênHệ: React.FC<PropsFormLiênHệ> = ({ id }) => {
  const [tên, setTên] = useState('');
  const [email, setEmail] = useState('');
  const [tinNhắn, setTinNhắn] = useState('');
  const [đangGửi, setĐangGửi] = useState(false);
  const [thànhCông, setThànhCông] = useState(false);
  const [lỗi, setLỗi] = useState(false);

  const xửLýGửi = async (e: React.FormEvent) => {
    e.preventDefault();
    setĐangGửi(true);
    setThànhCông(false);
    setLỗi(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tên, email, tinNhắn }),
      });

      if (response.ok) {
        setThànhCông(true);
        setTên('');
        setEmail('');
        setTinNhắn('');
      } else {
        setLỗi(true);
      }
    } catch (error) {
      console.error('Lỗi khi gửi tin nhắn:', error);
      setLỗi(true);
    } finally {
      setĐangGửi(false);
    }
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8 shadow-professional rounded-lg" id={id}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Phần Form Liên Hệ */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-navy-primary">Contact</h2>
          <form onSubmit={xửLýGửi} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal-primary">Your Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="What is your name?" 
                value={tên}
                onChange={(e) => setTên(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-charcoal-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-professional-blue focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal-primary">Your Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="What is your email address?" 
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
                value={tinNhắn}
                onChange={(e) => setTinNhắn(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-charcoal-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-professional-blue focus:border-transparent"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={đangGửi}
              className="w-full bg-professional-blue hover:bg-navy-primary text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {đangGửi ? 'Sending...' : 'SEND MESSAGE'}
            </button>
            {thànhCông && (
              <p className="text-center text-green-600 mt-4">Message sent successfully!</p>
            )}
            {lỗi && (
              <p className="text-center text-red-600 mt-4">Failed to send message. Please try again later.</p>
            )}
          </form>
        </div>

        {/* Phần Hình Ảnh */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img 
            src={contactIllustration} 
            alt="Contact illustration" 
            className="rounded-lg shadow-lg object-cover max-h-[500px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FormLiênHệ; 