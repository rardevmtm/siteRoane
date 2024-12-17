import { motion } from 'framer-motion';
import { User, Users, Baby } from 'lucide-react';

const services = [
  {
    icon: User,
    title: "Psicoterapia Individual",
    description: "A psicoterapia individual é um processo terapêutico realizado entre um profissional qualificado e um cliente",
    gradient: "from-purple-400 via-pink-500 to-red-500"
  },
  {
    icon: Users,
    title: "Psicoterapia de Casal e Familiar",
    description: "A psicoterapia individual, casal e a familia é um processo terapêutico realizado entre um profissional qualificado e o cliente",
    gradient: "from-blue-400 via-indigo-500 to-purple-500"
  },
  {
    icon: Baby,
    title: "Atendimento a Crianças e Adolescentes",
    description: "O serviço de psicoterapia para crianças e adolescentes é um processo terapêutico especializado, voltado para ajudar jovens a lidar com suas emoções",
    gradient: "from-green-400 via-teal-500 to-blue-500"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Especialidades da Roane
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as áreas de atuação e como a psicóloga Roane pode ajudar você a viver melhor e mais feliz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Cartão com Gradiente */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 
                            hover:shadow-2xl border border-gray-100 overflow-hidden">
                {/* Gradiente de Fundo Animado */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}
                              group-hover:h-full transition-all duration-500 opacity-10`} />
                
                {/* Ícone com Gradiente */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-4 mb-6
                              transform group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900 relative">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 relative">
                  {service.description}
                </p>

                {/* Botão Saiba Mais */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-gray-900 font-medium relative"
                >
                  <span className="relative z-10 group-hover:text-purple-600 transition-colors">
                    Saiba mais
                  </span>
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}