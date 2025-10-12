import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { useTheme } from '../components/ThemeProvider';
import { theme, getThemeClasses } from '../theme';

const ProjectsSection = () => {
  const { darkMode } = useTheme();
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      "id": 1,
      "title": "FERB",
      "description": "Open Source 6DOF Robotic Arm with Closed Loop Controls.",
      "longDescription": "I constructed a robotic arm based on the open-source design \"Arctos\". The arm features six degrees of freedom and is controlled using a motion service made in python, with closed-loop feedback from rotary encoders. I designed and 3D printed custom mounts for a camera, and suction cups to securely mount the arm on a variety of surfaces, and developed the control algorithms to achieve precise movement and positioning.",
      "image": "client/public/FERB.JPG",
      "techStack": ["C++", "Python", "PyCAN", "Microcontrollers"],
      "githubLink": "https://github.com/MattMNIA/ArctosArmController",
      "liveLink": "ferb.mattmn.com"
    },
    {
      "id": 2,
      "title": "Camera-Based Golf Simulator",
      "description": "Computer vision application for tracking golf ball trajectory and speed.",
      "longDescription": "Developed a Python and OpenCV-based application that applies multiple filters to identify a golf ball in each frame of a slow-motion video. Utilized ball location data to calculate the trajectory and speed immediately after impact.",
      "image": "client/public/golf_simulator.jpg",
      "techStack": ["Python", "OpenCV"],
      "githubLink": "https://github.com/MattMNIA/Golf_Simulator",
      "liveLink": ""
    },
    {
      "id": 3,
      "title": "Sudoku Solver",
      "description": "Computer vision-based Sudoku solver using OCR and backtracking.",
      "longDescription": "Utilized OpenCV to identify and isolate individual cells in a Sudoku puzzle. Applied EasyOCR to recognize digits and implemented a backtracking algorithm to efficiently solve the puzzle.",
      "image": "client/public/sudoku.png",
      "techStack": ["Python", "OpenCV", "EasyOCR"],
      "githubLink": "https://github.com/MattMNIA/sudoku-solver",
      "liveLink": ""
    },
    {
      "id": 4,
      "title": "CourseCritic",
      "description": "A RateMyProfessor alternative that helps students make informed course decisions.",
      "longDescription": "Developed a full-stack web application that allows college students to view and share course ratings, helping them make better enrollment decisions. The platform features user-submitted reviews, professor ratings, and course difficulty analysis. Data was collected using a Selenium web scraper and stored in a MySQL database for efficient querying.",
      "image": "client/public/course_critic.png",
      "techStack": ["React", "Node.js", "MySQL", "Selenium"],
      "githubLink": "https://github.com/MattMNIA/coursecritic",
      "liveLink": ""
    }
  ];

  return (
    <section
      id="projects"
      className={getThemeClasses(
        theme.styles.section.base,
        theme.styles.section,
        darkMode
      )}
    >
      <div className={theme.styles.container}>
        <motion.div
          {...theme.animations.fadeInUp}
          className="text-center mb-16"
        >
          <h2 className={theme.styles.text.heading.primary}>Projects</h2>
          <div className={getThemeClasses(
            theme.styles.divider.base,
            theme.styles.divider,
            darkMode
          )}></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90">
            A selection of my recent work, showcasing my skills and expertise in web development.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <div key={project.id} className={getThemeClasses(
              'rounded-xl overflow-hidden transition-all duration-300',
              { light: 'bg-white shadow-lg hover:shadow-xl', dark: 'bg-gray-900 shadow-lg hover:shadow-xl' },
              darkMode
            )}>
              <div className="h-64 overflow-hidden">
                <img
                  src={`/${project.image.split('/').pop()}`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={theme.styles.text.heading.secondary}>{project.title}</h3>
                <p className="opacity-90 mb-4 overflow-hidden text-ellipsis" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {project.description}
                </p>

                {expandedProject === project.id ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4"
                  >
                    <p className="mb-4">{project.longDescription}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className={getThemeClasses(
                              'px-3 py-1 text-sm rounded-full',
                              { light: 'bg-gray-200 text-blue-700', dark: 'bg-gray-700 text-blue-300' },
                              darkMode
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : null}

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className={getThemeClasses(
                      'text-sm',
                      { light: 'text-blue-600 hover:text-blue-500', dark: 'text-blue-400 hover:text-blue-300' },
                      darkMode
                    )}
                  >
                    {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                  </button>
                  {project.liveLink && (
                    <a
                      href={`https://${project.liveLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={getThemeClasses(
                        'px-4 py-2 text-sm rounded-lg font-medium transition-colors',
                        { light: 'bg-blue-600 hover:bg-blue-700 text-white', dark: 'bg-blue-500 hover:bg-blue-600 text-white' },
                        darkMode
                      )}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/MattMNIA"
            target="_blank"
            rel="noopener noreferrer"
            className={getThemeClasses(
              'inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white',
              { light: 'bg-blue-600 hover:bg-blue-700', dark: 'bg-blue-500 hover:bg-blue-600' },
              darkMode
            )}
            {...theme.animations.hover}
          >
            View All Projects <SiGithub size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;