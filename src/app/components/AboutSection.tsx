import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="scroll-mt-8 py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-wider text-blue-600 mb-4">ABOUT ME</h2>
          <h3 className="text-3xl sm:text-4xl mb-6 sm:mb-8">Building reliable products with clear architecture</h3>
          
          <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              I'm a Frontend / Full-stack Developer with <strong className="text-gray-900">6+ years of experience</strong> building
              web applications in <strong className="text-gray-900">healthcare and finance</strong>.
            </p>
            <p>
              I work mainly with <strong className="text-gray-900">React, TypeScript, JavaScript, and modern frontend tooling</strong>,
              and I care deeply about performance, maintainability, and accessibility. My recent work also includes
              full-stack delivery with <strong className="text-gray-900">.NET, API integration, validation logic, and database migrations</strong>.
            </p>
            <p>
              Across product teams of different sizes, I've contributed to reusable component libraries, micro-frontend
              adoption, stronger test coverage, and smoother delivery workflows throughout the full product lifecycle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
