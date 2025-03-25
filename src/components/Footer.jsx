import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white text-center py-3 items-center justify-center" style={{backgroundColor:'#0c0003'}}>
          <p className="mb-0">
            Made with <Heart size={16} style={{color: '#FF4081' }}/> by Madhavi © {new Date().getFullYear()}
          </p>
     </footer>
  );
};

export default Footer;