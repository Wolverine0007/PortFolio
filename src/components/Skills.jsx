import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiGit, SiGithub } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'from-orange-500 to-orange-600' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', icon: FaJs, color: 'from-yellow-400 to-yellow-500' },
    { name: 'React.js', icon: FaReact, color: 'from-cyan-400 to-cyan-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'from-green-500 to-green-600' },
    { name: 'Python', icon: FaPython, color: 'from-blue-600 to-blue-700' },
    { name: 'Java', icon: FaJava, color: 'from-red-500 to-red-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'from-green-600 to-green-700' },
    { name: 'Express.js', icon: SiExpress, color: 'from-gray-600 to-gray-700' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Git', icon: SiGit, color: 'from-orange-600 to-orange-700' },
    { name: 'GitHub', icon: SiGithub, color: 'from-gray-800 to-gray-900' }
  ];

  return (
    <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 py-16 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1" >Technical Skills</h1>
        <p className="text-gray-600 mb-4">My proficiency in various technologies and tools</p>
        <span className="inline-block w-24 h-1 bg-indigo-500 mx-auto"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div 
              key={skill.name}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}>
                  <IconComponent className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{skill.name}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Additional Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <h3 className="font-semibold text-gray-800">Problem Solving</h3>
              <p className="text-sm text-gray-600">Competitive Programming</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <h3 className="font-semibold text-gray-800">Data Analysis</h3>
              <p className="text-sm text-gray-600">Tableau & Analytics</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <h3 className="font-semibold text-gray-800">Database Design</h3>
              <p className="text-sm text-gray-600">SQL & NoSQL</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <h3 className="font-semibold text-gray-800">UI/UX Design</h3>
              <p className="text-sm text-gray-600">Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills; 