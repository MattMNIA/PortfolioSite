import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './sections/HomePage';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import { ChevronUp, Linkedin, Mail } from 'lucide-react';
import { SiGithub } from 'react-icons/si';


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
        <HomePage darkMode={darkMode} setDarkMode={setDarkMode} />
        <ProjectsSection darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <ExperienceSection darkMode={darkMode} />
        
        {/* Footer */}
        <footer className={`py-10 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold">
                  <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Matthew</span> Morgan
                </h2>
                <p className="mt-2 opacity-80">Built with React</p>
              </div>
              
              <div className="flex space-x-6 items-center">
                <motion.a 
                  href="https://github.com/MattMNIA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="opacity-80 hover:opacity-100"
                >
                  <SiGithub size={20} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/mattmn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="opacity-80 hover:opacity-100"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href="mailto:mattmn@iastate.edu"
                  whileHover={{ y: -3 }}
                  className="opacity-80 hover:opacity-100"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="opacity-60 text-sm">© {new Date().getFullYear()} Matthew Morgan. All rights reserved.</p>
            </div>
          </div>
        </footer>
        
        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
              } transition-colors z-50`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;