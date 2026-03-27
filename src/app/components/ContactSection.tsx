import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useInView } from './hooks/useInView';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dmitrii.kostrov@example.com',
    href: 'mailto:dmitrii.kostrov@example.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dmitriikostrov',
    href: 'https://linkedin.com/in/dmitriikostrov',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/dkostrov',
    href: 'https://github.com/dkostrov',
  },
];

export function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-sm tracking-wider text-blue-600 mb-4">GET IN TOUCH</h2>
          <h3 className="text-3xl sm:text-4xl mb-4 sm:mb-6">Let's Work Together</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {contactLinks.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">{contact.label}</p>
                      <p className="text-xs sm:text-sm text-gray-900 group-hover:text-blue-600 transition-colors break-all">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.a
            href="mailto:dmitrii.kostrov@example.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            Send Message
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-200 text-center text-gray-500 text-xs sm:text-sm"
      >
        <p>© 2026 Dmitrii Kostrov. Built with React & TypeScript.</p>
      </motion.footer>
    </section>
  );
}