import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { theme, getThemeClasses } from '../theme';

const ExperienceSection = () => {
  const { darkMode } = useTheme();
  const experiences = [
    {
      "id": 1,
      "role": "Innovation Engineer (Part Time)",
      "company": "Ecolab",
      "period": "March 2025 - Present",
      "location": "Remote (During School) & On-Site (Summer)",
      "description": "Lead AI-driven innovation projects, specializing in Generative AI Engineering and full-stack development. Work part-time remotely during the school year and will lead a team of interns on a high-impact project during the summer.",
      "achievements": [
        "Promoted to Innovation Engineer after a stellar first internship.",
        "Developed AI prototypes that were demoed to Ecolab’s Board of Directors.",
        "Helped define the innovation process within the company, working closely with senior leadership.",
        "Created full-stack AI-driven applications to optimize business operations.",
        "Led projects to be presented to top executives and customers, with high impact and visibility with a short timeframe."
      ],
      "technologies": ["Python", "Azure", "TensorFlow", "OpenAI API", "Flask", "React", "Node.js", "Docker", "MySQL"]
    },
    {
      "id": 1,
      "role": "Artificial Intelligence Intern",
      "company": "Ecolab",
      "period": "May 2024 - March 2025",
      "location": "Naperville, IL",
      "description": "Developed AI solutions for high-impact business applications, including a Generative AI prototype for a major customer demo.",
      "achievements": [
        "Built an AI product identifying millions in missing Total Value Delivered.",
        "Created a rapid prototyping AI environment for iterative development.",
        "Collaborated with SMEs across divisions to accelerate AI innovation.",
        "Successfully delivered an AI prototype to Ecolab’s Board of Directors.",
        "Developed a dashboard for field representatives to help customers identify areas of improvement."
      ],
      "technologies": ["Python", "Scikit-Learn", "TensorFlow", "Pandas", "NumPy", "Flask"]
    },
    {
      "id": 2,
      "role": "Deck Specialist",
      "company": "Bear Paddle Swim School",
      "period": "April 2022 - September 2023",
      "location": "Aurora, IL",
      "description": "Led team meetings, coached instructors, and improved service quality through direct customer feedback.",
      "achievements": [
        "Organized and led team meetings to improve lesson quality.",
        "Mentored new instructors to enhance teaching effectiveness.",
        "Communicated with customers to gather feedback and refine services."
      ],
      "technologies": []
    }
  ];

  return (
    <section
      id="experience"
      className={getThemeClasses(
        theme.styles.section.base,
        theme.styles.section,
        darkMode
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          {...theme.animations.fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={theme.styles.text.heading.primary}>Experience</h2>
          <div className={getThemeClasses(
            theme.styles.divider.base,
            theme.styles.divider,
            darkMode
          )}></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90">
            My professional journey and work experience in the software development industry.
          </p>
        </motion.div>
        
        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={getThemeClasses(
              'absolute left-0 md:left-1/2 h-full w-0.5 transform -translate-x-1/2',
              { light: 'bg-gray-300', dark: 'bg-gray-700' },
              darkMode
            )}
          ></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0, x: '-50%' }}
                  whileInView={{ scale: 1, x: '-50%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className={getThemeClasses(
                    'absolute left-0 md:left-1/2 w-5 h-5 rounded-full border-4 top-0 z-10',
                    { light: 'bg-white border-blue-600', dark: 'bg-gray-900 border-blue-500' },
                    darkMode
                  )}
                ></motion.div>
                
                {/* Experience Card */}
                <motion.div
                  {...theme.animations.fadeInUp}
                  transition={{ ...theme.animations.fadeInUp.transition, delay: 0.3 }}
                  className={`md:w-5/12 ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto md:pl-0 pl-8'
                  }`}
                >
                  <div
                    className={getThemeClasses(
                      'p-6 rounded-xl shadow-lg',
                      { light: 'bg-white', dark: 'bg-gray-900' },
                      darkMode
                    )}
                  >
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <h4 className={getThemeClasses(
                      'text-lg mb-3',
                      { light: 'text-blue-600', dark: 'text-blue-400' },
                      darkMode
                    )}>
                      {exp.company}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm opacity-80">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="mb-4 opacity-90">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">Key Achievements:</h5>
                      <ul className="list-disc pl-5 space-y-1 opacity-90">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={getThemeClasses(
                            'px-2 py-1 text-xs rounded-full',
                            { light: 'bg-gray-200 text-blue-700', dark: 'bg-gray-800 text-blue-300' },
                            darkMode
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;