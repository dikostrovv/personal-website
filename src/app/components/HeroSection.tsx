import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-blue-600 mb-4 tracking-wide"
          >
            FRONTEND DEVELOPER (REACT / TYPESCRIPT)
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 tracking-tight px-4"
          >
            Dmitrii Kostrov
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Frontend and full-stack developer with 6+ years of experience building scalable web applications in healthcare and finance, with a strong focus on performance, maintainability, and user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <button
              onClick={() => scrollToSection('experience')}
              className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              View Experience
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 sm:px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-all hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
