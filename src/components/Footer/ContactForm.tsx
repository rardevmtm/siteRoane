import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { formatPhoneNumber } from './utils';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhoneNumber(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://rarwhk.rardevops.com/webhook/contato-roane', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.name,
          telefone: formData.phone,
          'e-mail': formData.email,
          mensagem: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar mensagem');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <h3 className="text-xl font-semibold text-white mb-4">Entre em Contato</h3>
      <p className="text-gray-300 mb-6">Agende agora mesmo</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
          />
          
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefone"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
          />
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensagem"
            required
            disabled={status === 'loading'}
            rows={4}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-purple-500 focus:border-transparent resize-none disabled:opacity-50"
          />
          
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
            className={`w-full py-3 ${
              status === 'loading' 
                ? 'bg-purple-400 cursor-wait' 
                : 'bg-purple-600 hover:bg-purple-700'
            } text-white rounded-lg font-semibold transition-colors shadow-lg disabled:opacity-50`}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          </motion.button>
        </div>
      </form>

      {/* Feedback Messages */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center 
                     bg-black/80 rounded-lg backdrop-blur-sm"
          >
            <div className="text-center p-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h4 className="text-xl font-semibold text-white mb-2">Mensagem Enviada!</h4>
              <p className="text-gray-300">Agradecemos seu contato. Retornaremos em breve!</p>
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center 
                     bg-black/80 rounded-lg backdrop-blur-sm"
          >
            <div className="text-center p-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.div>
              <h4 className="text-xl font-semibold text-white mb-2">Erro ao Enviar</h4>
              <p className="text-gray-300">Ocorreu um erro. Por favor, tente novamente mais tarde.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}