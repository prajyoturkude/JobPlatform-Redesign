import React from 'react';
import '../styles/WhatsappButton.css'; // Create this CSS file for styling

function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/7709130494"; 

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="Chat on WhatsApp"
      />
    </a>
  );
}

export default WhatsAppButton;
