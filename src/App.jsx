import React, { useState } from 'react';
import './index.css';
import logo from './assets/logo.png';

function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Fakhir Group Free WiFi" className="logo-image" />
        </div>
      </header>

      <main className="main-content">
        <a href="#restaurants" className="nav-item">
          Restaurants
        </a>

        <a href="#offers" className="nav-item">
          Offers
        </a>

        <a href="#brand" className="nav-item">
          Show Your Brand
        </a>
      </main>

      <footer className="footer">
        <button onClick={() => setIsContactPopupOpen(true)} className="contact-link" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
          Contact Us - Complaints
        </button>
      </footer>

      {isContactPopupOpen && (
        <div className="modal-overlay" onClick={() => setIsContactPopupOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Contact & Complaints</h2>
            <p>Please reach out to us for any assistance:</p>
            <div className="contact-details">
              <p><strong>Email:</strong> support@fakhirgroup.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
            <button className="close-button" onClick={() => setIsContactPopupOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
