import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Testemunhos', href: '#testemunhos' },
  { label: 'Contato', href: '#contato' },
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 flex flex-col"
          >
            <div className="p-6">
              <img
                src="https://e74396715faa9369da9ee3200445fe2f.cdn.bubble.io/f1723323245682x807795381631339800/logo%20roane-1080-s-fundo.png"
                alt="Logo Roane"
                className="w-16 h-16 mx-auto mb-8 rounded-full"
              />
              
              <div className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={onClose}
                    className="block py-3 px-4 text-gray-800 hover:bg-purple-50 rounded-lg
                             transition-colors font-medium text-lg"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-auto p-6 border-t border-gray-100"
            >
              <a
                href="#contato"
                onClick={onClose}
                className="block w-full py-3 px-4 bg-purple-600 text-white rounded-lg
                         text-center font-semibold hover:bg-purple-700 transition-colors"
              >
                Agendar Consulta
              </a>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}