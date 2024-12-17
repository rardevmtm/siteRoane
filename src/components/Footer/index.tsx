import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import LegalLinks from './LegalLinks';

export default function Footer() {
  return (
    <footer className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://e74396715faa9369da9ee3200445fe2f.cdn.bubble.io/f1734391426955x666159023432520700/imagem1-psicologia.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900/90 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar o equilíbrio emocional e bem-estar que procura.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <SocialLinks />
          <LegalLinks />
          <ContactForm />
          <ContactInfo />
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-white/60 text-sm">
              © 2024 - Psicóloga Roane Stéphane. Todos os direitos reservados.
              <a href="#" className="ml-2 hover:text-white transition-colors">
                Política de Cookies
              </a>
            </div>
            
            <div className="text-white/60 text-sm md:text-right">
              Site Desenvolvido pela{' '}
              <a
                href="https://rardev.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                RAR INSIDE BUSINESS
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}