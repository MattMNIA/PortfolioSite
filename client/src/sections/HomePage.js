import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Moon, Sun, ExternalLink, ChevronRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../components/ThemeProvider';
import { theme, getThemeClasses } from '../theme';

const HomePage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className={getThemeClasses(
      'min-h-screen transition-colors duration-300',
      { light: 'bg-gray-50 text-gray-900', dark: 'bg-gray-900 text-white' },
      darkMode
    )}>
      {/* Navigation */}
      <nav className={getThemeClasses(
        'fixed top-0 left-0 right-0 z-50 backdrop-blur-lg',
        { light: 'bg-white/80', dark: 'bg-gray-900/80' },
        darkMode
      )}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className={getThemeClasses(
              '',
              { light: 'text-blue-600', dark: 'text-blue-400' },
              darkMode
            )}>Matthew Morgan</span>
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
                className={`capitalize transition-colors ${
                  activeSection === item
                    ? getThemeClasses('', { light: 'text-blue-600', dark: 'text-blue-400' }, darkMode)
                    : 'hover:text-blue-500'
                }`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={getThemeClasses(
                'p-2 rounded-full transition-colors',
                { light: 'bg-gray-100 hover:bg-gray-200', dark: 'bg-gray-800 hover:bg-gray-700' },
                darkMode
              )}
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
            className={getThemeClasses(
              'md:hidden p-4',
              { light: 'bg-white', dark: 'bg-gray-800' },
              darkMode
            )}
          >
            {['about', 'projects', 'skills', 'experience'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`block py-2 capitalize ${
                  activeSection === item
                    ? getThemeClasses('', { light: 'text-blue-600', dark: 'text-blue-400' }, darkMode)
                    : ''
                }`}
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
            <h1 className={theme.styles.text.heading.primary}>
              Hi, I'm <span className={getThemeClasses(
                '',
                { light: 'text-blue-600', dark: 'text-blue-400' },
                darkMode
              )}>Matthew Morgan</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
              >
                <div style={{ fontSize: '1.5rem', display: 'inline-block' }}>I am a&nbsp;</div>
                <TypeAnimation
                  sequence={[
                    ' ML/AI Engineer.',
                    1000,
                    ' Full Stack Developer.',
                    1000,
                    ' Data Scientist.',
                    1000,
                    ' Data Engineer.',
                    1000,
                    ' Data Analyst.',
                    1000,
                    ' IOS Developer.',
                    1000
                  ]}
                  wrapper="div"
                  speed={10}
                  style={{ fontSize: '1.5rem', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </motion.span>
              <br />
            </h2>
            <p className="text-base mb-8 max-w-lg opacity-90">
              I build modern web applications to display my work. I'm passionate about utilizing computer vision, driving revenue using AI, and continuously learning.
            </p>
            <div className="flex space-x-4 mb-8">
              <motion.a
                href="https://github.com/MattMNIA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={getThemeClasses(
                  'p-3 rounded-full transition-colors flex items-center justify-center',
                  { light: 'bg-gray-100 hover:bg-gray-200', dark: 'bg-gray-800 hover:bg-gray-700' },
                  darkMode
                )}
              >
                <SiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mattmn/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={getThemeClasses(
                  'p-3 rounded-full transition-colors',
                  { light: 'bg-gray-100 hover:bg-gray-200', dark: 'bg-gray-800 hover:bg-gray-700' },
                  darkMode
                )}
              >
                <Linkedin />
              </motion.a>
              <motion.a
                href="mailto:mattmn@iastate.edu"
                whileHover={{ y: -5 }}
                className={getThemeClasses(
                  'p-3 rounded-full transition-colors',
                  { light: 'bg-gray-100 hover:bg-gray-200', dark: 'bg-gray-800 hover:bg-gray-700' },
                  darkMode
                )}
              >
                <Mail />
              </motion.a>
            </div>
            <motion.a
              href="/Matthew_Morgan_Resume_Online_F26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={getThemeClasses(
                'px-6 py-3 rounded-lg text-white font-semibold flex items-center',
                { light: 'bg-blue-600 hover:bg-blue-700', dark: 'bg-blue-500 hover:bg-blue-600' },
                darkMode
              )}
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
            <div className={getThemeClasses(
              'w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 flex items-center justify-center text-5xl font-bold',
              { light: 'border-blue-600 bg-blue-300', dark: 'border-blue-500 bg-blue-400' },
              darkMode
            )}>
              {<img src="client/public/Apple_Photo_Blue_Logo.jpg" alt="My Photo" className="w-full h-full object-cover"/>}
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
            <div className={getThemeClasses(
              'border-2 rounded-full p-2',
              { light: 'border-gray-300', dark: 'border-gray-700' },
              darkMode
            )}>
              <ChevronRight size={24} className="rotate-90" />
            </div>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;