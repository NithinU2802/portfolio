import { motion } from 'framer-motion';
import { experiences } from '../../data/portfolioData';
import { TimelineItem } from '../ui/Timeline';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        <div ref={ref} className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              subtitle={exp.company}
              duration={exp.duration}
              isLast={index === experiences.length - 1}
            >
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <motion.li
                    key={respIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + respIndex * 0.05 }}
                  >
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}


