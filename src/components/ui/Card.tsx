import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-900/50 transition-all duration-300 ${
        hover ? 'hover:shadow-xl dark:hover:shadow-gray-900/70 hover:-translate-y-1' : ''
      } ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}


