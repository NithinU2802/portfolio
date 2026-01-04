import { motion } from 'framer-motion';
import { about, personalInfo } from '../../data/portfolioData';
import Card from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div ref={ref} className="grid md:grid-cols-2 gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.img
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-blue-500 dark:border-purple-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-purple-500 dark:border-blue-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ borderTopColor: 'transparent' }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card>
              {about.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


