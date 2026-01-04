import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { socialLinks } from '../../data/portfolioData';

export default function Footer() {
  const socialIcons = [
    { icon: FaGithub, url: socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaGlobe, url: socialLinks.portfolio, label: 'Portfolio' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Nithin U. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


