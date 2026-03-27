import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Calendar } from 'lucide-react';
import { useInView } from './hooks/useInView';

const experiences = [
  {
    id: 1,
    company: 'HealthTech Solutions',
    role: 'Senior Frontend Developer',
    period: '2021 - Present',
    summary: 'Leading frontend architecture for a healthcare platform serving 500K+ users',
    achievements: [
      'Architected micro-frontend system using Module Federation, reducing deployment time by 60%',
      'Built component library used across 8 applications, improving development velocity by 40%',
      'Implemented performance optimizations reducing initial load time from 4.2s to 1.1s',
      'Mentored team of 5 junior developers on React best practices and TypeScript',
    ],
    technologies: ['React', 'TypeScript', 'Module Federation', 'Webpack', 'Storybook', 'React Query'],
  },
  {
    id: 2,
    company: 'FinanceApp Inc',
    role: 'Full-stack Developer',
    period: '2019 - 2021',
    summary: 'Developed trading platform features handling $2M+ daily transactions',
    achievements: [
      'Built real-time data visualization dashboard with sub-100ms update latency',
      'Implemented comprehensive testing strategy achieving 95% code coverage',
      'Reduced API response times by 45% through query optimization and caching',
      'Collaborated with design team to create accessible, WCAG 2.1 compliant interfaces',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'D3.js'],
  },
  {
    id: 3,
    company: 'StartupLabs',
    role: 'Frontend Developer',
    period: '2018 - 2019',
    summary: 'Developed MVP for early-stage SaaS products across multiple domains',
    achievements: [
      'Shipped 3 MVPs from concept to production in 6-month timeframes',
      'Established frontend development standards and code review processes',
      'Integrated third-party APIs including Stripe, Auth0, and SendGrid',
      'Improved page performance scores from 65 to 95+ (Lighthouse)',
    ],
    technologies: ['React', 'Redux', 'Express.js', 'MongoDB', 'AWS', 'Jest'],
  },
];

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { ref, isInView } = useInView();

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-wider text-blue-600 mb-4">EXPERIENCE</h2>
          <h3 className="text-3xl sm:text-4xl mb-8 sm:mb-12">Professional Journey</h3>

          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="w-full p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <h4 className="text-lg sm:text-xl">{exp.company}</h4>
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {exp.period}
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-blue-600 mb-2">{exp.role}</p>
                        <p className="text-sm sm:text-base text-gray-600">{exp.summary}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 mt-2"
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-gray-100">
                          <div className="mb-6">
                            <h5 className="text-xs sm:text-sm font-medium text-gray-900 mb-3">Key Achievements</h5>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex gap-3 text-sm sm:text-base text-gray-600"
                                >
                                  <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-xs sm:text-sm font-medium text-gray-900 mb-3">Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.03 }}
                                  className="px-2.5 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs sm:text-sm"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}