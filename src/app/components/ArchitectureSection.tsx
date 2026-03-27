import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
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
    id: 'host',
    title: 'Host Application',
    subtitle: 'Container & Router',
    details: [
      {
        title: 'Core Responsibilities',
        items: [
          'Application shell and routing',
          'Authentication & authorization',
          'Global state management',
          'Error boundary & monitoring',
        ],
      },
      {
        title: 'Technologies',
        items: [
          'React Router',
          'Context API',
          'Sentry integration',
          'Azure AD authentication',
        ],
      },
    ],
  },
  {
    id: 'microfrontends',
    title: 'Micro-frontends',
    subtitle: 'Federated Modules',
    details: [
      {
        title: 'Architecture',
        items: [
          'Module Federation (Webpack 5)',
          'Independent deployments',
          'Isolated build pipelines',
          'Runtime integration',
        ],
      },
      {
        title: 'Benefits',
        items: [
          'Team autonomy',
          'Faster release cycles',
          'Technology flexibility',
          'Scalable development',
        ],
      },
    ],
  },
  {
    id: 'components',
    title: 'Component Library',
    subtitle: 'Shared UI System',
    details: [
      {
        title: 'Features',
        items: [
          '50+ reusable components',
          'Consistent design system',
          'Accessibility (WCAG 2.1)',
          'TypeScript definitions',
        ],
      },
      {
        title: 'Tooling',
        items: [
          'Storybook documentation',
          'Automated visual testing',
          'NPM package distribution',
          'Semantic versioning',
        ],
      },
    ],
  },
];

export function ArchitectureSection() {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);
  const { ref, isInView } = useInView();

  return (
    <section id="architecture" className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-wider text-blue-600 mb-4">SYSTEM DESIGN</h2>
          <h3 className="text-3xl sm:text-4xl mb-4">Architecture Expertise</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-2xl">
            Interactive visualization of micro-frontend architecture. Click on each component to explore details.
          </p>

          {/* Architecture Diagram */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 mb-8">
              {architectureBlocks.map((block, index) => (
                <div key={block.id} className="flex items-center w-full md:w-auto">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.15 }}
                    onClick={() => setSelectedBlock(block.id)}
                    onMouseEnter={() => setHoveredBlock(block.id)}
                    onMouseLeave={() => setHoveredBlock(null)}
                    className={`
                      relative bg-white border-2 rounded-xl p-4 sm:p-6 w-full md:min-w-[200px] transition-all
                      ${hoveredBlock === block.id ? 'border-blue-400 shadow-xl md:-translate-y-2' : 'border-gray-200 shadow-md'}
                      ${selectedBlock === block.id ? 'border-blue-600 shadow-2xl ring-4 ring-blue-100' : ''}
                      hover:border-blue-400 hover:shadow-xl md:hover:-translate-y-2
                    `}
                  >
                    <div className="text-center">
                      <h4 className="text-base sm:text-lg mb-1">{block.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{block.subtitle}</p>
                    </div>

                    {/* Connection indicator */}
                    {hoveredBlock === block.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 border-2 border-blue-400 rounded-xl -z-10"
                        style={{
                          boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                        }}
                      />
                    )}
                  </motion.button>

                  {/* Arrow connector */}
                  {index < architectureBlocks.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.1 }}
                      className={`mx-2 md:mx-2 my-2 md:my-0 transition-colors ${
                        hoveredBlock === block.id || hoveredBlock === architectureBlocks[index + 1].id
                          ? 'text-blue-600'
                          : 'text-gray-300'
                      }`}
                    >
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:rotate-0 rotate-90" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Detailed Panel */}
            <AnimatePresence>
              {selectedBlock && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 sm:p-8 border border-blue-200 overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl sm:text-2xl mb-2">
                        {architectureBlocks.find(b => b.id === selectedBlock)?.title}
                      </h4>
                      <p className="text-sm sm:text-base text-blue-600">
                        {architectureBlocks.find(b => b.id === selectedBlock)?.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedBlock(null)}
                      className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {architectureBlocks
                      .find(b => b.id === selectedBlock)
                      ?.details.map((detail, i) => (
                        <motion.div
                          key={detail.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-white rounded-lg p-4 sm:p-5 border border-blue-100"
                        >
                          <h5 className="font-medium mb-3 text-gray-900 text-sm sm:text-base">{detail.title}</h5>
                          <ul className="space-y-2">
                            {detail.items.map((item, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 + idx * 0.05 }}
                                className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm"
                              >
                                <span className="text-blue-600 mt-1">•</span>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}