import { useState } from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export function WhatsAppButton({
  phoneNumber = '7696174501',
  defaultMessage = 'Hello PDEEPS Institute, I would like to inquire about your e-commerce training and project-based opportunities.'
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Clean and normalize phone number (auto-prefix 91 for 10-digit Indian numbers)
  const encodedMessage = encodeURIComponent(defaultMessage);
  const rawDigits = phoneNumber.replace(/[^0-9]/g, '');
  const cleanPhone = rawDigits.length === 10 ? `91${rawDigits}` : rawDigits;
  const whatsappUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;

  return (
    <div 
      className="whatsapp-floating-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip Label */}
      <span className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`}>
        Need help? Chat on WhatsApp
      </span>

      {/* Pulsing Ambient Wave */}
      <span className="whatsapp-pulse-ring"></span>

      {/* Main Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        aria-label="Chat with PDEEPS Institute on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="whatsapp-svg-icon"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.002 0C7.164 0 0 7.164 0 16.002c0 2.825.738 5.577 2.143 7.998L.07 31.93l8.118-2.128a15.938 15.938 0 007.814 2.03h.007c8.834 0 15.998-7.164 15.998-16.002 0-4.275-1.665-8.293-4.689-11.317A15.908 15.908 0 0016.002 0zm0 29.317h-.006a13.25 13.25 0 01-6.75-1.854l-.485-.288-5.02 1.316 1.34-4.89-.316-.503A13.23 13.23 0 012.69 16c0-7.34 5.972-13.313 13.316-13.313 3.557 0 6.9 1.385 9.414 3.9 2.515 2.515 3.9 5.859 3.9 9.416 0 7.34-5.974 13.314-13.318 13.314zm7.302-9.967c-.4-.2-2.368-1.168-2.735-1.302-.367-.133-.634-.2-.901.2-.267.4-1.034 1.302-1.268 1.569-.234.267-.468.3-.868.1s-1.696-.625-3.23-1.993c-1.194-1.064-2-2.38-2.234-2.78-.234-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.234.267-.4.4-.668.134-.267.067-.5-.033-.7-.1-.2-.901-2.17-1.235-2.97-.325-.78-.655-.674-.9-.686-.233-.012-.5-.015-.767-.015s-.7.1-1.068.5c-.367.4-1.4 1.368-1.4 3.336s1.434 3.87 1.634 4.137c.2.267 2.822 4.31 6.837 6.042.955.412 1.7.658 2.28.843.958.304 1.83.261 2.52.158.77-.115 2.368-.968 2.702-1.902.334-.934.334-1.735.234-1.902-.1-.167-.367-.267-.767-.467z" />
        </svg>
      </a>
    </div>
  );
}
