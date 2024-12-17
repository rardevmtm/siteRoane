import { motion } from 'framer-motion';
import { GraduationCap, Brain, Heart, Star, Award } from 'lucide-react';

const qualifications = [
  {
    icon: GraduationCap,
    title: "Formação Acadêmica",
    items: [
      "Bacharel em Psicologia",
      "Pós Graduação em Terapia Cognitiva Comportamental",
      "Análise do Comportamento Aplicada",
      "Psicologia Infantojuvenil"
    ]
  },
  {
    icon: Brain,
    title: "Experiência Profissional",
    items: [
      "Psicologia Clínica",
      "Atendimento clínico com crianças TEA"
    ]
  },
  {
    icon: Heart,
    title: "Áreas de Atuação",
    items: [
      "Clínica"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Conheça a Psicóloga que Transformou Vidas
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
          <div className="flex items-center justify-center gap-4 mb-8">
            <Award className="w-8 h-8 text-purple-600" />
            <p className="text-xl text-gray-700">Reconhecida pela Excelência!</p>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seu trabalho tem sido valioso para seus clientes, fazendo desde sempre com muito esforço e dedicação.
          </p>
        </motion.div>

        {/* Qualifications Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <qual.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{qual.title}</h3>
              </div>
              <ul className="space-y-3">
                {qual.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}