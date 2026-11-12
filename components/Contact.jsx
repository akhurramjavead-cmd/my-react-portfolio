import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Aapki apni CSS file

const Contact = () => {
  // Form ki inputs ko manage karne ke liye state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS parameters
    const serviceID = 'YOUR_SERVICE_ID';     // EmailJS se mili hui Service ID yahan dalein
    const templateID = 'YOUR_TEMPLATE_ID';   // EmailJS se mili hui Template ID yahan dalein
    const publicKey = 'YOUR_PUBLIC_KEY';     // EmailJS ki Public Key yahan dalein

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage('Thank you! Your message has been sent successfully.');
          setFormData({ name: '', email: '', message: '' }); // Form clear kar dein
          setIsSending(false);
      }, (err) => {
          console.log('FAILED...', err);
          setStatusMessage('Oops! Something went wrong, please try again later.');
          setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea 
            name="message" 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="submit-btn" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>

        {statusMessage && <p className="status-msg">{statusMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;