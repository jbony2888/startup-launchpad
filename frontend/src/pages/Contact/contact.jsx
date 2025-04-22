import React, { useState } from 'react';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your form submission logic.
    console.log(formData);
    alert('Your message has been submitted!');
  };

  return (
    <div className="contact-container">
      <section className="contact">
        <h1>Contact Us</h1>
        <p>Please fill out the form below and we will get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>
    
    </div>
  );
};

export default ContactUs;
