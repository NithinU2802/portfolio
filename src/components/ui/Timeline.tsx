import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  children: ReactNode;
  isLast?: boolean;
}

export function TimelineItem({
  title,
  subtitle,
  duration,
  children,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />
      )}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10" />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{subtitle}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{duration}</p>
        <div className="text-gray-700 dark:text-gray-300 space-y-2">{children}</div>
      </motion.div>
    </div>
  );
}


