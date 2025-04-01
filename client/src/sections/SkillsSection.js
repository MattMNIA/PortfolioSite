import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const skillCategories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & DevOps' },
    { id: 'other', name: 'Other' }
  ];
  
  const skills = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Redux', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'SASS/SCSS', level: 70 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'GraphQL', level: 65 },
      { name: 'REST APIs', level: 90 },
      { name: 'Firebase', level: 80 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Webpack', level: 75 },
      { name: 'Jest/Testing', level: 80 },
      { name: 'Agile/Scrum', level: 85 },
    ],
    other: [
      { name: 'UI/UX Design', level: 70 },
      { name: 'Performance Optimization', level: 80 },
      { name: 'SEO', level: 65 },
      { name: 'Technical Writing', level: 75 },
      { name: 'Accessibility', level: 70 },
      { name: 'Problem Solving', level: 90 },
    ],
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section 
      id="skills" 
      className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className={`h-1 w-20 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90">
            My technical skills and expertise across various technologies and tools.
          </p>
        </motion.div>
        
        {/* Skill Categories */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap ${
                  activeCategory === category.id
                    ? darkMode 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-blue-600 text-white'
                    : darkMode
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Skill Bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-6"
        >
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="mb-4"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{skill.level}%</span>
              </div>
              <div 
                className={`h-2 w-full rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Skill Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-10">Technical Expertise</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Frontend Dev", value: "4+ Years", icon: "🖥️" },
              { title: "Backend Dev", value: "3+ Years", icon: "⚙️" },
              { title: "Mobile Dev", value: "2+ Years", icon: "📱" },
              { title: "DevOps", value: "2+ Years", icon: "🔄" }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -10, scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center shadow-lg`}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h4 className="text-lg font-semibold mb-1">{card.title}</h4>
                <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>{card.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;