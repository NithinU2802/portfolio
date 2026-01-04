import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import Card from '../ui/Card';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    { icon: FaEnvelope, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FaMapMarkerAlt, text: personalInfo.location, href: null },
  ];

  const socialIcons = [
    { icon: FaGithub, url: socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaGlobe, url: socialLinks.portfolio, label: 'Portfolio' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <div ref={ref} className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      const content = (
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span>{info.text}</span>
                        </div>
                      );

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {info.href ? (
                            <a
                              href={info.href}
                              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              {content}
                            </a>
                          ) : (
                            content
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex gap-4">
                    {socialIcons.map(({ icon: Icon, url, label }, index) => (
                      <motion.a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={label}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


