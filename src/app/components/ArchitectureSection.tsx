import { IconChevronDown } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useInView } from './hooks/useInView';

interface ArchBlock {
  id: string;
  title: string;
  subtitle: string;
  details: {
    title: string;
    items: string[];
  }[];
}

const architectureBlocks: ArchBlock[] = [
  {
    id: 'frontend',
    title: 'Frontend Foundations',
    subtitle: 'React / TypeScript',
    details: [
      {
        title: 'Core Focus',
        items: [
          'Building scalable interfaces with React and TypeScript',
          'Creating maintainable UI with reusable component patterns',
          'Responsive design and accessibility improvements',
          'Performance-minded delivery across production apps',
        ],
      },
      {
        title: 'Technologies',
        items: [
          'React',
          'TypeScript',
          'JavaScript',
          'SCSS / CSS',
        ],
      },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    subtitle: 'Patterns & systems',
    details: [
      {
        title: 'Architecture',
        items: [
          'Micro-frontends',
          'Component libraries',
          'Clean Architecture principles',
        ],
      },
      {
        title: 'What I improved',
        items: [
          'Split a monolithic healthcare system into micro-frontends',
          'Built shared UI foundations with Storybook and Jest',
          'Improved delivery speed through reusable components',
          'Worked across the full product lifecycle in Agile teams',
        ],
      },
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery',
    subtitle: 'Quality and collaboration',
    details: [
      {
        title: 'Engineering Practices',
        items: [
          'Unit testing with Jest and React Testing Library',
          'CI/CD pipeline awareness and release support',
          'REST API integration and backend collaboration',
          'Code reviews and mentoring newer developers',
        ],
      },
      {
        title: 'Recent stack',
        items: [
          'Webpack and Vite',
          '.NET',
          'GitLab CI/CD',
        ],
      },
    ],
  },
];

export function ArchitectureSection() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const { ref, isInView } = useInView();

  const toggleCard = (id: string) => {
    setOpenCardId(prev => (prev === id ? null : id));
  };

  return (
    <section id="architecture" className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-wider text-blue-600 mb-4">APPROACH</h2>
          <h3 className="text-3xl sm:text-4xl mb-4">How I Work</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-2xl">
            A quick overview of the technical areas that define my recent work across healthcare and finance products.
          </p>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 items-start">
            {architectureBlocks.map((block, index) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => toggleCard(block.id)}
                  className="w-full text-left p-4 sm:p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl mb-1">{block.title}</h4>
                      <p className="text-sm sm:text-base text-blue-600">{block.subtitle}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: openCardId === block.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-2"
                    >
                      <IconChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openCardId === block.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-4 border-t border-gray-100">
                        <div className="space-y-4">
                          {block.details.map((detail) => (
                            <div key={detail.title}>
                              <h5 className="text-sm sm:text-base font-medium text-gray-900 mb-3">{detail.title}</h5>
                              <ul className="space-y-2">
                                {detail.items.map((item) => (
                                  <li key={item} className="flex gap-3 text-sm sm:text-base text-gray-600">
                                    <span className="text-blue-600 flex-shrink-0">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
