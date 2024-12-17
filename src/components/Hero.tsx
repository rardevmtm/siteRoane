import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-20 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="text-purple-600 font-semibold text-lg mb-2 block">
              #1 psicologia sua saude em primeiro lugar
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">O equilíbrio emocional é a chave para o sucesso:</span>
              <br />
              <span className="text-blue-600">e a psicologia te mostra o caminho.</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-6">
              Conheça o trabalho desenvolvido pela psicológa Roane Stéphane e comece agora a elevar sua qualidade de vida.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Falar Agora
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center h-full"
          >
            <img
              src="https://e74396715faa9369da9ee3200445fe2f.cdn.bubble.io/f1723320941547x760057576647004500/equilibrio%201.png"
              alt="Equilíbrio"
              className="w-full max-h-[600px] object-contain rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}