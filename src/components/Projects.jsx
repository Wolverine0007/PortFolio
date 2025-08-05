import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiJavascript, SiPython, SiJava } from 'react-icons/si';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with MERN stack. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      icons: [FaReact, FaNodeJs, FaDatabase, SiMongodb],
      github: "https://github.com/Wolverine0007/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      icons: [FaReact, FaNodeJs, SiMongodb],
      github: "https://github.com/Wolverine0007/task-manager",
      live: "https://task-manager-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather and forecasts using OpenWeatherMap API with beautiful UI and location-based services.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "CSS3", "Weather API"],
      icons: [FaReact, SiJavascript, SiTailwindcss],
      github: "https://github.com/Wolverine0007/weather-app",
      live: "https://weather-app-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Data Analysis Tool",
      description: "Python-based data analysis tool for processing and visualizing large datasets with interactive charts and export functionality.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Pandas", "Matplotlib", "Streamlit"],
      icons: [SiPython],
      github: "https://github.com/Wolverine0007/data-analysis-tool",
      live: "https://data-analysis-demo.streamlit.app",
      featured: false
    },
    {
      id: 5,
      title: "Java Banking System",
      description: "A console-based banking system implemented in Java with features like account management, transactions, and data persistence.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["Java", "OOP", "File I/O", "Collections"],
      icons: [SiJava],
      github: "https://github.com/Wolverine0007/banking-system",
      live: null,
      featured: false
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "This responsive portfolio website built with React and Tailwind CSS, featuring modern design and smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      icons: [FaReact, SiTailwindcss, SiJavascript],
      github: "https://github.com/Wolverine0007/portfolio",
      live: "https://sanketbanate.dev",
      featured: false
    }
  ];

  const getTechnologyColor = (tech) => {
    const colors = {
      'React': 'bg-cyan-100 text-cyan-800',
      'Node.js': 'bg-green-100 text-green-800',
      'MongoDB': 'bg-green-100 text-green-800',
      'Express': 'bg-gray-100 text-gray-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'Python': 'bg-blue-100 text-blue-800',
      'Java': 'bg-red-100 text-red-800',
      'CSS3': 'bg-blue-100 text-blue-800',
      'Tailwind CSS': 'bg-cyan-100 text-cyan-800'
    };
    return colors[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 py-16 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Featured Projects</h1>
        <p className="text-gray-600 mb-4">A showcase of my recent work and technical projects</p>
        <span className="inline-block w-24 h-1 bg-emerald-500 mx-auto"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
              project.featured ? 'ring-2 ring-emerald-500' : ''
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {project.featured && (
                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getTechnologyColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {project.icons.map((Icon, iconIndex) => (
                    <Icon key={iconIndex} className="text-gray-600 text-lg" />
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <FaGithub className="text-lg" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="https://github.com/Wolverine0007" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors duration-200"
        >
          <FaGithub className="text-xl" />
          <span>View More on GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default Projects; 