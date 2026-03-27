import { motion } from 'motion/react';
import { IconBolt, IconExternalLink } from '@tabler/icons-react';
import { useInView } from './hooks/useInView';

const projects = [
  {
    id: 1,
    title: 'StaffScheduleCare',
    description: 'Healthcare workforce management platform where I build payroll and workforce management features across frontend and backend.',
    techStack: ['React', 'TypeScript', '.NET', 'REST APIs', 'Testing'],
    keyResult: 'Delivered end-to-end product work spanning UI, API integration, C# handlers, validation logic, and database migrations.',
    metrics: ['Healthcare', 'Full-stack', '+40% test coverage'],
  },
  {
    id: 2,
    title: 'Healthcare Web Platforms',
    description: 'Clinic and patient-facing healthcare products built during my work with IQVIA.',
    techStack: ['React', 'TypeScript', 'SCSS', 'Storybook', 'Jest', 'Webpack'],
    keyResult: 'Helped move a monolithic system to micro-frontends and created a component library that reduced feature delivery time by about 20%.',
    metrics: ['Micro-frontends', 'Healthcare'],
  },
  {
    id: 3,
    title: 'Investment Strategy Platform',
    description: 'Responsive conference product demo built for a major investment event as an overlapping project.',
    techStack: ['React', 'TypeScript', 'SCSS', 'PWA'],
    keyResult: 'Delivered the demo in under 2 months and improved app speed by 30% with a mobile-first PWA approach.',
    metrics: ['Under 2 months', 'Offline-ready'],
  },
];

export function ProjectsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm tracking-wider text-blue-600 mb-4">PROJECTS</h2>
          <h3 className="text-3xl sm:text-4xl mb-8 sm:mb-12">Selected Projects</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg sm:text-xl group-hover:text-blue-600 transition-colors pr-2">
                    {project.title}
                  </h4>
                  <IconExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                </div>

                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-2 mb-3">
                    <IconBolt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-gray-700">{project.keyResult}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="px-2 py-1 bg-blue-50 text-blue-700 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
