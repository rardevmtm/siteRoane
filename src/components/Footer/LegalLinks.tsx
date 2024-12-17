import { motion } from 'framer-motion';

export default function LegalLinks() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">Links Úteis</h3>
      <div className="space-y-2">
        <motion.a
          href="#"
          className="block text-white/80 hover:text-white transition-colors"
          whileHover={{ x: 5 }}
        >
          Política de Privacidade
        </motion.a>
        <motion.a
          href="#"
          className="block text-white/80 hover:text-white transition-colors"
          whileHover={{ x: 5 }}
        >
          Termos de Uso
        </motion.a>
      </div>
    </div>
  );
}