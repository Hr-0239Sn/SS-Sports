import { Link } from 'react-router-dom';
import '../../src/App.css';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    alert('Thank you for subscribing!');
    e.target.reset();
  };

  // Using Map for navigation ;links
  const footerLinks = new Map([
    ['Quick Links', [
      { path: '/', label: 'Home' },
      { path: '/products', label: 'Products' },
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' },
      { path: '/cart', label: 'My Cart' }
    ]],
    ['Customer Service', [
      { path: '/shipping-policy', label: 'Shipping Policy' },
      { path: '/returns', label: 'Returns & Exchanges' },
      { path: '/faqs', label: 'FAQs' },
      { path: '/size-guide', label: 'Size Guide' },
      { path: '/track-order', label: 'Track Order' }
    ]]
  ]);

  // Using Map for social media links
  const socialMedia = new Map([
    ['Facebook', { url: 'https://facebook.com', icon: 'images/facebook.png' }],
    ['Twitter', { url: 'https://twitter.com', icon: '/images/twitter.png' }],
    ['Instagram', { url: 'https://instagram.com', icon: '/images/social.png' }],
    ['WhatsApp', { url: 'https://whatsapp.com', icon: '/images/whatsapp.png' }]
  ]);

  // Using Map for payment methods
  const paymentMethods = new Map([
    ['Visa', { url: 'https://www.visa.com', icon: '/images/visa.png' }]
    // Add more payment methods as needed
  ]);

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          {/* Render sections from the footerLinks Map */}
          {Array.from(footerLinks).map(([sectionTitle, links]) => (
            <div className="footer-section" key={sectionTitle}>
              <h3>{sectionTitle}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Magnum Global Park<br />Gurgaon, HR</p>
            <p>Phone: (91) 1234567890</p>
            <p>Email: info@sportzone.com</p>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {Array.from(socialMedia).map(([name, { url, icon }]) => (
                <a 
                  key={name}
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={name}
                >
                  <img src={icon} alt={name} width="40" />
                </a>
              ))}
            </div>
            
            <h3 className="newsletter-title">Newsletter</h3>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 SportZone. All rights reserved.</p>
          <div className="payment-methods">
            {Array.from(paymentMethods).map(([name, { url, icon }]) => (
              <a 
                key={name}
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={icon} alt={name} width="40" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;