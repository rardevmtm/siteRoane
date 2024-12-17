import { motion } from 'framer-motion';
import { Instagram, MapPin } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">Siga-nos</h3>
      <div className="flex space-x-4">
        <motion.a
          href="https://www.instagram.com/psiroanestephane"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="text-white/80 hover:text-white transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </motion.a>
        
        <motion.a
          href="https://maps.app.goo.gl/A2aLZgezjtHJd6SN7"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="text-white/80 hover:text-white transition-colors"
        >
          <MapPin className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
}