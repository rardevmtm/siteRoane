import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MenuButton from './MobileMenu/MenuButton';
import MobileNav from './MobileMenu/MobileNav';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(245, 243, 255, 0)', 'rgba(245, 243, 255, 0.9)']
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 shadow-sm backdrop-blur-sm' : 'py-2'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-100 rounded-full scale-125"></div>
            <img 
              src="https://e74396715faa9369da9ee3200445fe2f.cdn.bubble.io/f1723323245682x807795381631339800/logo%20roane-1080-s-fundo.png"
              alt="Logo Roane"
              className="h-20 w-20 relative z-10 rounded-full object-cover"
            />
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8">
            {['Sobre', 'Serviços', 'Testemunhos', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-purple-600 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Botão do Menu Mobile */}
          <MenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}