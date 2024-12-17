import { motion } from 'framer-motion';
import { Quote, Star, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    text: "Sou simplesmente fã do seu trabalho!! Iniciei minha terapia com a Roane e no início pensei que não teria um meio para diminuir com as minhas ansiedades. E daí essa maravilhosa me ajudou MUITOO!!! sou imensamente grata aos resultados que tive através da minha constante terapia com a Roane e recomendo a todos esse trabalho maravilhoso que ela presta com muito amor e carinho. ❤️",
    author: "Camilla Fonseca",
    url: "https://maps.app.goo.gl/pLxwG8uFkniE4P7c6"
  },
  {
    text: "A Roane é incrível, o trabalho dela é magnífico. Tem tato para falar, acolhe nossos problemas e nos direciona da melhor forma para poder aprender a solucionar as nossas demandas internas. Ela salvou e salva minha vida todos os dias!",
    author: "Ana Luíza",
    url: "https://maps.app.goo.gl/6tStrVnnvkrgxUQw5"
  },
  {
    text: "Minha experiência com a Roane foi extremamente positiva. A combinação de profissionalismo, competência e empatia faz dela uma excelente psicóloga. Estou muito satisfeito com os resultados e continuarei minhas sessões com ela.",
    author: "Igor Menezes",
    url: "https://maps.app.goo.gl/DWjtqhSUB2RpEZVv8"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            O que dizem nossos clientes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 relative border border-purple-100 hover:border-purple-200 transition-all"
            >
              <div className="absolute top-4 right-4">
                <motion.a
                  href={testimonial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="text-purple-400 hover:text-purple-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>

              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              
              <motion.p 
                className="text-gray-600 mb-4 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {testimonial.text}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-between mt-6"
              >
                <p className="font-semibold text-gray-900">- {testimonial.author}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}