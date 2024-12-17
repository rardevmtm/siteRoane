import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Meus contatos</h3>
      
      <div className="space-y-4">
        <motion.a
          href="tel:+5531991639536"
          className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
          whileHover={{ x: 5 }}
        >
          <Phone className="w-5 h-5" />
          <span>(31) 9 9163-9536</span>
        </motion.a>
        
        <motion.a
          href="mailto:ro.anethe@gmail.com"
          className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
          whileHover={{ x: 5 }}
        >
          <Mail className="w-5 h-5" />
          <span>ro.anethe@gmail.com</span>
        </motion.a>
        
        <motion.a
          href="https://wa.me/5531991639536"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
          whileHover={{ x: 5 }}
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
}