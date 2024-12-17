import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Schedule() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Agende agora mesmo uma reunião e conheça a Roane
            </h2>
            
            <p className="text-lg text-gray-700">
              Nessa reunião falaremos um pouco do meu método de trabalho e minha paixão 
              pela profissão e em ajudar as pessoas a se conhecerem melhor e poderem 
              buscar uma melhor qualidade de vida, através do nosso apoio psicológico. 
              Clique no botão e vamos agendar será um prazer.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold 
                flex items-center gap-2 hover:bg-purple-700 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              AGENDAR AGORA
            </motion.button>
          </motion.div>

          {/* Coluna da Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] max-w-md mx-auto"
          >
            {/* Moldura decorativa */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 to-purple-200 rounded-2xl transform -rotate-3 opacity-50"></div>
            
            {/* Container da imagem com máscara de proporção */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://e74396715faa9369da9ee3200445fe2f.cdn.bubble.io/f1734315346488x740411845863874400/WhatsApp%20Image%202024-09-01%20at%2016.18.14.jpeg"
                alt="Dra. Roane"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 rounded-2xl transform rotate-45"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}