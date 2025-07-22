import { useState } from 'react';
import '../../src/App.css';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  // FAQ data
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase with original receipt. Items must be unused and in original packaging."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express options are available at checkout."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and times vary by destination."
    }
  ];

  // Contact info data
  const contactInfo = [
    {
      title: "Address",
      content: "Magnum Global Park, Sector-58<br />Gurgaon, HR"
    },
    {
      title: "Phone",
      content: "(91) 1234567890"
    },
    {
      title: "Email",
      content: "info@sportzone.com"
    },
    {
      title: "Hours",
      content: "Monday-Friday: 9am-7pm<br />Saturday: 10am-6pm<br />Sunday: 12pm-5pm"
    }
  ];

  // Form subject options
  const subjectOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "order", label: "Order Question" },
    { value: "return", label: "Returns/Exchanges" },
    { value: "product", label: "Product Question" },
    { value: "other", label: "Other" }
  ];

  return (
    <section className="contact-page">
      <div className="container">
        <h1>Get In Touch</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Info</h2>
            {contactInfo.map((info, index) => (
              <div className="info-item" key={index}>
                <h3>{info.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: info.content }} />
              </div>
            ))}
            
            <h2>Store Location</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209126327!2d-73.9878446845938!3d40.748440479327996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMDkuOSJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                title="Store Location"
              ></iframe>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Chat On</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                  {subjectOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
            
            <div className="faq-section">
              <h3>FAQ's</h3>
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <button 
                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                  </button>
                  <div 
                    className="faq-answer"
                    style={{ display: activeFaq === index ? 'block' : 'none' }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;