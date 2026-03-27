import {motion} from "motion/react";
import {useInView} from "./hooks/useInView";

const skillsData = {
  Frontend: {
    primary: ["React", "TypeScript", "JavaScript", "Redux"],
    secondary: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Responsive Design",
      "Accessibility",
      "PWA",
      "Storybook",
    ],
  },
  Testing: {
    primary: ["Jest", "React Testing Library", "Unit Testing"],
    secondary: ["CI/CD Pipelines"],
  },
  "Architecture & Patterns": {
    primary: ["Micro-frontends", "Component Libraries", "Clean Architecture"],
    secondary: [],
  },
  Tools: {
    primary: ["Git", "Webpack", "Vite", "REST"],
    secondary: ["GitLab CI/CD"],
  },
};

export function SkillsSection() {
  const {ref, isInView} = useInView();

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-sm tracking-wider text-blue-600 mb-4">SKILLS</h2>
          <h3 className="text-3xl sm:text-4xl mb-8 sm:mb-12">
            Technical Stack
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {Object.entries(skillsData).map(
              ([category, {primary, secondary}], index) => {
                return (
                  <motion.div
                    key={category}
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{delay: index * 0.1}}
                    className="h-full bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-base sm:text-lg mb-4">{category}</h4>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {primary.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 sm:px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs sm:text-sm border border-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {secondary.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                        {secondary.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 sm:px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs sm:text-sm border border-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              },
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
