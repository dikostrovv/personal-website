import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useInView } from './hooks/useInView';

const skillsData = {
  Frontend: {
    visible: ['React', 'TypeScript', 'JavaScript', 'Redux'],
    hidden: ['HTML5', 'CSS3', 'SCSS', 'Responsive Design', 'Accessibility', 'PWA', 'Storybook'],
  },
  'Architecture & Patterns': {
    visible: ['Micro-frontends', 'Component Libraries', 'Clean Architecture'],
    hidden: [],
  },
  Testing: {
    visible: ['Jest', 'React Testing Library', 'Unit Testing'],
    hidden: ['CI/CD Pipelines'],
  },
  Tools: {
    visible: ['Git', 'Webpack', 'Vite', 'REST'],
    hidden: ['GitLab CI/CD'],
  },
};

export function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const { ref, isInView } = useInView();

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-wider text-blue-600 mb-4">SKILLS</h2>
          <h3 className="text-3xl sm:text-4xl mb-8 sm:mb-12">Technical Stack</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {Object.entries(skillsData).map(([category, { visible, hidden }], index) => {
              const isExpanded = expandedCategories.has(category);
              const hasHiddenItems = hidden.length > 0;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-base sm:text-lg mb-4">{category}</h4>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {visible.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 sm:px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs sm:text-sm border border-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {hasHiddenItems && isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                          {hidden.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 sm:px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs sm:text-sm border border-gray-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {hasHiddenItems && (
                    <button
                      onClick={() => toggleCategory(category)}
                      className="mt-3 text-xs sm:text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                    >
                      {isExpanded ? 'Show less' : `+ ${hidden.length} more`}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
