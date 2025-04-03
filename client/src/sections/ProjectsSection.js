import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';


const ProjectsSection = ({ darkMode }) => {
  const [expandedProject, setExpandedProject] = useState(null);
  
  const projects = [
      {
        "id": 1,
        "title": "Camera-Based Golf Simulator",
        "description": "Computer vision application for tracking golf ball trajectory and speed.",
        "longDescription": "Developed a Python and OpenCV-based application that applies multiple filters to identify a golf ball in each frame of a slow-motion video. Utilized ball location data to calculate the trajectory and speed immediately after impact.",
        "image": "client/public/golf_simulator.jpg",
        "techStack": ["Python", "OpenCV"],
        "githubLink": "https://github.com/MattMNIA/Golf_Simulator",
        "liveLink": ""
      },
      {
        "id": 2,
        "title": "Automated Scheduling System",
        "description": "Automated scheduling tool for improving efficiency at Bear Paddle Swim School.",
        "longDescription": "Created a Python-based automation system using Google Sheets API to streamline scheduling tasks, identify overbooked classes, and improve service quality by minimizing human error.",
        "image": "client/public/schedule_system.png",
        "techStack": ["Python", "Google Sheets API"],
        "githubLink": "https://github.com/MattMNIA/scheduling-system",
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="projects" 
      className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className={`h-1 w-20 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90">
            A selection of my recent work, showcasing my skills and expertise in web development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg transition-all duration-300`}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image.replace('client/public/', '/')} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="opacity-90 mb-4 line-clamp-2">
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
                            className={`px-3 py-1 text-sm rounded-full ${
                              darkMode ? 'bg-gray-700 text-blue-300' : 'bg-gray-200 text-blue-700'
                            }`}
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
                    className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
                  >
                    {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
            </motion.div>
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
            className={`inline-flex items-center px-6 py-3 rounded-lg ${
              darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-semibold`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects <SiGithub size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;