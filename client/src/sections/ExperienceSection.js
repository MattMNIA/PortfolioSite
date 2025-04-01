import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = ({ darkMode }) => {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "Jan 2023 - Present",
      location: "San Francisco, CA",
      description: "Lead the frontend development team for enterprise SaaS applications. Implemented new React component library that reduced development time by 40%. Optimized application performance, reducing load times by 60%.",
      achievements: [
        "Architected and implemented a company-wide design system using React and Storybook",
        "Led migration from Redux to React Query, improving data fetching performance",
        "Mentored junior developers and conducted code reviews to maintain high code quality",
        "Collaborated with UX team to implement accessibility improvements across all products"
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Webpack", "Jest", "CI/CD"]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "InnovateLabs",
      period: "Mar 2021 - Dec 2022",
      location: "Austin, TX",
      description: "Developed and maintained multiple web applications for clients in finance and healthcare sectors. Created responsive interfaces and RESTful APIs with a focus on security and scalability.",
      achievements: [
        "Built secure authentication system with multi-factor authentication",
        "Developed custom CMS for healthcare client, reducing content update time by 75%",
        "Implemented real-time notification system using WebSockets",
        "Optimized database queries, improving API response times by 40%"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "Docker"]
    },
    {
      id: 3,
      role: "Software Developer",
      company: "WebSoft Inc.",
      period: "Jun 2019 - Feb 2021",
      location: "Seattle, WA",
      description: "Worked on e-commerce platform serving 50K+ monthly users. Implemented new features and fixed bugs across frontend and backend codebases.",
      achievements: [
        "Developed shopping cart and checkout process with multiple payment integrations",
        "Created admin dashboard for inventory and order management",
        "Implemented automated testing strategy, increasing code coverage to 80%",
        "Participated in agile development process with two-week sprint cycles"
      ],
      technologies: ["JavaScript", "Vue.js", "PHP", "MySQL", "AWS", "Jenkins"]
    },
    {
      id: 4,
      role: "Junior Web Developer",
      company: "Digital Creations",
      period: "Aug 2018 - May 2019",
      location: "Chicago, IL",
      description: "Assisted in the development of websites and web applications for small to medium-sized businesses. Focused on frontend implementation and responsive design.",
      achievements: [
        "Developed frontend components for 10+ client websites",
        "Created custom WordPress themes and plugins",
        "Implemented responsive designs ensuring cross-browser compatibility",
        "Collaborated with designers to implement pixel-perfect interfaces"
      ],
      technologies: ["HTML/CSS", "JavaScript", "jQuery", "WordPress", "SASS", "Git"]
    }
  ];

  return (
    <section 
      id="experience" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className={`h-1 w-20 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90">
            My professional journey and work experience in the software development industry.
          </p>
        </motion.div>
        
        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div 
            className={`absolute left-0 md:left-1/2 h-full w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} transform -translate-x-1/2`}
          ></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className={`absolute left-0 md:left-1/2 w-5 h-5 rounded-full border-4 ${
                    darkMode 
                      ? 'bg-gray-900 border-blue-500' 
                      : 'bg-white border-blue-600'
                  } transform -translate-x-1/2 z-10`}
                ></motion.div>
                
                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`md:w-5/12 ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto md:pl-0 pl-8'
                  }`}
                >
                  <div 
                    className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
                  >
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <h4 className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-3`}>
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
                          className={`px-2 py-1 text-xs rounded-full ${
                            darkMode ? 'bg-gray-800 text-blue-300' : 'bg-gray-200 text-blue-700'
                          }`}
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
        
        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg ${
              darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-semibold`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Resume <ExternalLink size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;