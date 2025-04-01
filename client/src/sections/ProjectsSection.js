import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';


const ProjectsSection = ({ darkMode }) => {
  const [expandedProject, setExpandedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with admin dashboard, payment processing, and inventory management.",
      longDescription: "A comprehensive e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product search and filtering, shopping cart functionality, Stripe payment integration, order tracking, and an admin dashboard for inventory and order management.",
      image: "ecommerce",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team functionality.",
      longDescription: "A task management solution designed for teams with real-time updates using Socket.io. The app includes features like task creation, assignment, priority setting, deadlines, comments, file attachments, and team collaboration tools.",
      image: "taskapp",
      techStack: ["React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Docker"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with forecast data, location search, and interactive visualizations.",
      longDescription: "A weather application that provides current conditions and forecasts for any location worldwide. Features include location search, geolocation detection, 7-day forecasts, hourly predictions, weather maps with various data layers, and historical weather data comparison.",
      image: "weather",
      techStack: ["React", "D3.js", "OpenWeather API", "Leaflet", "Tailwind CSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness application for tracking workouts, nutrition, and personal goals.",
      longDescription: "A comprehensive fitness tracker that allows users to log workouts, track nutrition, set goals, and visualize progress over time. The app includes workout templates, custom exercise creation, calorie tracking, body measurements, and achievement badges.",
      image: "fitness",
      techStack: ["React Native", "Firebase", "Redux", "Chart.js", "Google Fit API"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
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
              <div 
                className={`h-48 bg-blue-300 flex items-center justify-center text-2xl font-bold ${darkMode ? 'text-gray-800' : 'text-gray-700'}`}
              >
                {project.image}
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
                  
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                    >
                      <SiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
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
            href="https://github.com"
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