import { IconCalendar, IconChevronDown } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useInView } from './hooks/useInView';

const experiences = [
  {
    id: 1,
    company: 'Healthcare Workforce Management Platform (StaffScheduleCare)',
    role: 'Full-stack Developer',
    period: 'July 2025 - Present',
    summary: 'Building payroll and workforce management features for a healthcare platform at First Line Software.',
    achievements: [
      'Developed payroll and workforce management features used by senior living facilities across North America.',
      'Built and improved payroll configuration workflows and settings, enhancing usability and data consistency.',
      'Implemented end-to-end features across frontend and backend, including UI, API integration, C# handlers, domain models, validation logic, and database migrations.',
      'Added and maintained unit tests, improving reliability of validation and submission flows during frequent releases.',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', '.NET', 'REST APIs', 'Testing', 'Component Libraries', 'Agile/Scrum'],
  },
  {
    id: 2,
    company: 'IQVIA',
    role: 'Frontend Developer',
    period: '2021 - 2025',
    summary: 'Delivered healthcare web platform features for clinic and patient-facing products.',
    achievements: [
      'Developed and shipped features for clinic and patient platforms reaching thousands of users.',
      'Split a monolithic healthcare system into micro-frontends, cutting maintenance time and speeding up delivery.',
      'Created a component library with Storybook and Jest, reducing feature delivery time by about 20%.',
      'Expanded unit test coverage by 40%, improving stability and reducing production bugs.',
    ],
    technologies: ['React', 'TypeScript', 'SCSS', 'Storybook', 'Jest', 'Webpack'],
  },
  {
    id: 3,
    company: 'Investment Strategy Platform',
    role: 'Frontend Developer',
    period: '2022 - 2023',
    summary: 'Built a conference product demo for a major investment event as an overlapping project.',
    achievements: [
      'Delivered a responsive demo app in under 2 months for a major investment conference.',
      'Built a mobile-first investment platform with PWA features for offline use, improving speed by 30%.',
      'Designed reusable components that improved maintainability across the product.',
      'Ensured a smooth UX across devices for a C-level stakeholder audience.',
    ],
    technologies: ['React', 'TypeScript', 'SCSS', 'PWA'],
  },
  {
    id: 4,
    company: 'Healthcare Projects',
    role: 'Frontend Developer',
    period: '2020 - 2021',
    summary: 'Supported production healthcare apps in a junior frontend role.',
    achievements: [
      'Implemented new UI features and fixed bugs in apps used daily by clinics.',
      'Improved performance of key modules, reducing load time by about 20%.',
      'Participated in code reviews and mentored new developers on project setup and best practices.',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Git'],
  },
  {
    id: 5,
    company: 'Load Testing',
    role: 'Load Testing Engineer',
    period: '2019 - 2020',
    summary: 'Built and optimized JavaScript-based load testing scripts.',
    achievements: [
      'Built and optimized load testing scripts in JavaScript.',
      'Helped detect bottlenecks and improve system stability ahead of releases.',
    ],
    technologies: ['JavaScript', 'Load Testing'],
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
                            <IconCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
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
                        <IconChevronDown className="w-5 h-5 text-gray-400" />
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
                                  <span className="text-blue-600 flex-shrink-0">•</span>
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
