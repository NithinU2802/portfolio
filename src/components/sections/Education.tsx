import { motion } from 'framer-motion';
import { education } from '../../data/portfolioData';
import Card from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

export default function Education() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FaGraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {education.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {education.duration}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <FaTrophy className="text-yellow-500" /> Highlights
                </h4>
                <ul className="space-y-2">
                  {education.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


