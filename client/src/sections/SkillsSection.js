import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeProvider';
import { theme, getThemeClasses } from '../theme';

const SkillsSection = () => {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('ml');

  const skillCategories = [
    { id: 'ml', name: 'ML/AI'},
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & DevOps' },
    { id: 'other', name: 'Other' }
  ];

  const skills = {
    ml: [
      { name: 'OpenCV' },
      { name: 'Pytorch' },
      { name: 'Generative AI' },
      { name: 'Agentic AI' },
      { name: 'Pandas' },
      { name: 'Numpy' }
    ],
    frontend: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML/CSS' },
      { name: 'Bootstrap CSS' },
    ],
    backend: [
      { name: 'Node.js' },
      { name: 'Flask' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'REST APIs' },
      { name: 'MySQL' },
    ],
    tools: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'CI/CD' },
      { name: 'Azure' },
      { name: 'Junit/Testing' },
    ],
    other: [
      { name: 'UI/UX Design' },
      { name: 'Performance Optimization' },
      { name: 'Algorithms' },
      { name: 'SEO' },
      { name: 'Technical Writing' },
      { name: 'Accessibility' },
      { name: 'Problem Solving' },
    ],
  };

  return (
    <section
      id="skills"
      className={getThemeClasses(
        theme.styles.section.base,
        { light: 'bg-white', dark: 'bg-gray-900' },
        darkMode
      )}
    >
      <div className={theme.styles.container}>
        <motion.div
          {...theme.animations.fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={theme.styles.text.heading.primary}>Skills</h2>
          <div className={getThemeClasses(
            theme.styles.divider.base,
            theme.styles.divider,
            darkMode
          )}></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90">
            My technical skills and expertise across various technologies and tools.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="flex justify-center mb-12 overflow-x-auto overflow-y-hidden">
          <div className="flex space-x-2 md:space-x-4">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={getThemeClasses(
                  'px-6 py-3 rounded-lg text-sm md:text-base font-semibold whitespace-nowrap border-2 transition-all duration-200',
                  {
                    light: activeCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-300 hover:border-gray-400 shadow-sm',
                    dark: activeCategory === category.id
                      ? 'bg-blue-500 text-white border-blue-500 shadow-lg'
                      : 'bg-transparent hover:bg-gray-800 text-gray-200 border-gray-600 hover:border-gray-500'
                  },
                  darkMode
                )}
                {...theme.animations.hover}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skill Items */}
        <motion.div
          key={activeCategory}
          variants={theme.animations.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={theme.animations.staggerItem}
              className={getThemeClasses(
                'p-4 rounded-lg flex items-center justify-center',
                { light: 'bg-gray-50 border border-gray-200', dark: 'bg-gray-800/50 border border-gray-700' },
                darkMode
              )}
            >
              <span className="font-medium text-center text-sm md:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          {...theme.animations.fadeInUp}
          transition={{ ...theme.animations.fadeInUp.transition, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-10">Technical Expertise</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Frontend Dev", value: "2+ Years", icon: "🖥️" },
              { title: "Backend Dev", value: "3+ Years", icon: "⚙️" },
              { title: "Gen AI", value: "2+ Years", icon: "🤖" },
              { title: "Computer Vision", value: "2+ Years", icon: "👁️" }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -10, scale: 1.03 }}
                {...theme.animations.fadeInUp}
                transition={{ ...theme.animations.fadeInUp.transition, delay: 0.2 + index * 0.1 }}
                className={getThemeClasses(
                  'p-6 rounded-xl text-center shadow-lg',
                  { light: 'bg-gray-100', dark: 'bg-gray-800' },
                  darkMode
                )}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h4 className="text-lg font-semibold mb-1">{card.title}</h4>
                <p className={getThemeClasses(
                  'font-medium',
                  { light: 'text-blue-600', dark: 'text-blue-400' },
                  darkMode
                )}>{card.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;