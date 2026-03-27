import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-wider text-blue-600 mb-4">ABOUT ME</h2>
          <h3 className="text-3xl sm:text-4xl mb-6 sm:mb-8">Building systems that scale</h3>
          
          <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              I'm a Frontend / Full-stack Developer with <strong className="text-gray-900">6+ years of experience</strong> building 
              scalable web applications in the <strong className="text-gray-900">healthcare and finance</strong> domains.
            </p>
            <p>
              My expertise lies in creating robust architectures that prioritize <strong className="text-gray-900">performance, 
              maintainability, and scalability</strong>. I specialize in React and TypeScript, with deep knowledge 
              of micro-frontend architectures, component libraries, and modern build tools.
            </p>
            <p>
              I believe great software comes from the intersection of clean code, thoughtful architecture, 
              and user-centered design. Every project I work on reflects this philosophy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}