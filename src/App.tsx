import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <section id="sobre"><About /></section>
      <Schedule />
      <section id="servicos"><Services /></section>
      <section id="testemunhos"><Testimonials /></section>
      <section id="contato"><Footer /></section>
    </motion.div>
  );
}