import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.trim()) {
      const userMessage = { type: 'user', text: input };
      setMessages([...messages, userMessage]);

      const aiResponse = await getAIResponse(input);
      const aiMessage = { type: 'ai', text: aiResponse };

      setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
      setInput('');
    }
  };

  const getAIResponse = async (message) => {
    try {
      const response = await fetch('https://api.example.com/getAIResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return 'Sorry, I am having trouble responding right now.';
    }
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">Chat with Us</div>
      <div className="chatbox-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chatbox-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const Contact = () => {
  const [showChatbox, setShowChatbox] = useState(false);

  const toggleChatbox = () => setShowChatbox(!showChatbox);

  const handleEnquirySubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    try {
      const response = await fetch('http://localhost:5000/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Enquiry submitted successfully!');
      event.target.reset();
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit enquiry.');
    }
  };

  return (
    <div className="contact-container">
      <Navbar />
      <div className="background-image"></div>
      <div className="content">
        <h1>Contact Us</h1>
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            Welcome to our Elite Home Decor and Interior Design blog! We are passionate about helping you create the perfect living spaces that reflect your personal style.
          </p>
        </section>

        <section className="faq">
          <h2>FAQ</h2>
          <p>
            <strong>Q:</strong> How can I get in touch for design consultations?<br />
            <strong>A:</strong> You can reach us via the contact details provided below.
          </p>
          <p>
            <strong>Q:</strong> Do you offer online consultations?<br />
            <strong>A:</strong> Yes, we offer both online and in-person consultations.
          </p>
        </section>

        <section className="contact-details">
          <h2>Contact Details</h2>
          <div className="contact-info">
            <p><strong>Phone:</strong> +91 77889908770</p>
            <p><strong>Email:</strong> info@elitehomedecorblog.com</p>
            <p><strong>Instagram:</strong> www.instagram.com</p>
            <p><strong>YouTube:</strong> youtube.com/elitehomedecorblog</p>
            <p><strong>WhatsApp:</strong> +1-234-567-890</p>
            <p><strong>Facebook:</strong> facebook.com//elitehomedecorblog</p>
            <p><strong>LinkedIn:</strong> linkedin.com/company/elitehomedecorblog</p>
          </div>
        </section>

        <section className="addresses">
          <h2>Our Branches</h2>
          <div className="address-list">
            <p><strong>Head Office:</strong> 148, European street, London</p>
            <p><strong>Branch 1:</strong> 51/48, Race Course, Coimbatore</p>
            <p><strong>Branch 2:</strong> 25/6, Church street, Bangalore</p>
          </div>
        </section>

        <section className="enquiry-form">
          <h2>Enquiry Details</h2>
          <form onSubmit={handleEnquirySubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="showroom-details">
          <h2>Company Direct Showroom Details</h2>
          <p>Visit our showroom at 51/48, opp. to Collector Bungalow, Race Course, Gopalapuram, Coimbatore, Tamil Nadu 641018</p>
        </section>

        <section className="map">
          <h2>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395292.8829036356!2d76.8429265293664!3d11.016844812493617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8579b49a0ffaf%3A0xa7a6ffcd8359b14d!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1633385050625!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </section>

        <section className="chat-button">
          <button onClick={toggleChatbox} className="chat-now">
            {showChatbox ? 'Close Chat' : 'Chat Now'}
          </button>
          {showChatbox && <Chatbox />}
        </section>
      </div>
    </div>
  );
};

export default Contact;
