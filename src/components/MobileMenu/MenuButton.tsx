import { motion } from 'framer-motion';

interface MenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function MenuButton({ isOpen, toggle }: MenuButtonProps) {
  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: (custom: number) => ({
      rotate: custom,
      y: custom === 0 ? 8 : custom === 45 ? 0 : -8,
    }),
  };

  return (
    <motion.button
      onClick={toggle}
      className="relative z-50 w-10 h-10 flex flex-col justify-center items-center md:hidden"
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        variants={lineVariants}
        custom={isOpen ? 45 : 0}
        animate={isOpen ? "open" : "closed"}
        className="w-6 h-0.5 bg-gray-800 absolute origin-center transition-all"
      />
      <motion.span
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        animate={isOpen ? "open" : "closed"}
        className="w-6 h-0.5 bg-gray-800 absolute origin-center"
      />
      <motion.span
        variants={lineVariants}
        custom={isOpen ? -45 : 0}
        animate={isOpen ? "open" : "closed"}
        className="w-6 h-0.5 bg-gray-800 absolute origin-center transition-all"
      />
    </motion.button>
  );
}