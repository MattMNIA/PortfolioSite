import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Moon, Sun, ExternalLink, ChevronRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';


const HomePage = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'experience'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-lg`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>DEV</span>Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {['about', 'projects', 'skills', 'experience'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize ${activeSection === item ?
                  (darkMode ? 'text-blue-400' : 'text-blue-600') :
                  'hover:text-blue-500 transition-colors'}`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4`}
          >
            {['about', 'projects', 'skills', 'experience'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`block py-2 capitalize ${activeSection === item ?
                  (darkMode ? 'text-blue-400' : 'text-blue-600') : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center py-2"
            >
              {darkMode ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="about"
        className="min-h-screen flex flex-col justify-center pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Matthew Morgan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
              >
                Full Stack Developer/
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
              >
                AI Engineer
              </motion.span>
            </h2>
            <p className="text-lg mb-8 max-w-lg opacity-90">
              I build modern web applications to display my work. I'm Passionate about computer vision, driving revenue using AI, and continuous learning.
            </p>
            <div className="flex space-x-4 mb-8">
              <motion.a
                href="https://github.com/MattMNIA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors flex items-center justify-center`}
              >
                <SiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mattmn/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <Linkedin />
              </motion.a>
              <motion.a
                href="mailto:mattmn@iastate.edu"
                whileHover={{ y: -5 }}
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <Mail />
              </motion.a>
            </div>
            <motion.a
              href="/Matthew_Morgan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold flex items-center`}
            >
              View Resume <ExternalLink size={18} className="ml-2" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-500' : 'border-blue-600'}`}>
              <div className="w-full h-full bg-blue-300 flex items-center justify-center text-5xl font-bold">
                MM
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center pb-8">
          <motion.a
            href="#projects"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center"
          >
            <div className={`border-2 ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-full p-2`}>
              <ChevronRight size={24} className="rotate-90" />
            </div>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;