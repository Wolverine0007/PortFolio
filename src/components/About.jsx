import React from 'react'
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import ResumeDownload from './ResumeDownload';

function About() {
  return (
    <div name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 py-16 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-800 dark:to-orange-900 rounded-xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 dark:text-white">About Me</h1>
        <span className="inline-block w-24 h-1 bg-orange-500 mx-auto mt-4"></span>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
  Hello, I'm <span className="font-semibold text-orange-600 dark:text-orange-400">Sanket Banate</span>.
  With a background in IT, I am passionate about understanding systems end-to-end — from writing
  efficient C++ code to deploying applications on the cloud. My journey in competitive programming
  has strengthened my problem-solving mindset, while my exposure to AWS and computer networking
  helps me design solutions that are practical, scalable, and reliable. I enjoy learning how
  software performs in real-world environments and continuously improving my technical skills.
</p>


          <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 mb-8">
            <div className="space-y-4">
              <h2 className="font-bold text-orange-600 dark:text-orange-400 text-xl">Available On</h2>
              <div className="flex space-x-6">
                <a href="https://www.codechef.com/users/wolverine0007" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                  <SiCodechef className="text-3xl cursor-pointer text-orange-600 hover:text-orange-700" />
                </a>
                <a href="https://codeforces.com/profile/wolverine_coder" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                  <SiCodeforces className="text-3xl cursor-pointer text-orange-600 hover:text-orange-700" />
                </a>
                <a href="https://leetcode.com/u/sanket206/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                  <SiLeetcode className="text-3xl cursor-pointer text-orange-600 hover:text-orange-700" />
                </a>
                <a href="https://github.com/Wolverine0007" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                  <FaGithub className="text-3xl cursor-pointer text-orange-600 hover:text-orange-700" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-green-600 dark:text-green-400 font-semibold text-xl mb-4 flex items-center">
              <span className="w-2 h-6 bg-green-500 rounded mr-3"></span>
              Education & Training
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Education:</h3>
                <p className="text-gray-600 dark:text-gray-300">B.Tech in Computer Engineering</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Certifications:</h3>
                <div className="space-y-2">
                  <a href="https://drive.google.com/file/d/1szCMdGmGsvxML7JlOSWokV70JYhs4y55/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    • Python For Data Science
                  </a>
                  <a href="https://drive.google.com/file/d/1PwFh7UsM1DlE7BdaI-wmAb1YEDyIvACe/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    • JavaScript
                  </a>
                  <a href="https://drive.google.com/file/d/1ovD6mEcaDA4ROGcKcQU_dzUshSYXMe0Z/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    • Introduction to Cybersecurity
                  </a>
                  <a href="https://drive.google.com/file/d/1_iRvWSr3GzpK3rRcXyOT4oVpM08H9UIf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    • Data Science
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-green-600 dark:text-green-400 font-semibold text-xl mb-4 flex items-center">
              <span className="w-2 h-6 bg-green-500 rounded mr-3"></span>
              Skills & Expertise
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Proficient in:</span> Java, C++, Python, HTML, CSS</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Experienced with:</span> Tableau, database management systems, and web development tools</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Strong grasp of:</span> Data analysis, algorithm design, and web design principles</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Problem-solving:</span> Adept at tackling complex challenges in programming and data visualization</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Communication:</span> Skilled in teamwork and delivering clear, impactful solutions</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
          <h2 className="text-green-600 dark:text-green-400 font-semibold text-xl mb-4 flex items-center">
            <span className="w-2 h-6 bg-green-500 rounded mr-3"></span>
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Currently seeking opportunities to apply my skills in a professional environment</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
          <h2 className="text-green-600 dark:text-green-400 font-semibold text-xl mb-4 flex items-center">
            <span className="w-2 h-6 bg-green-500 rounded mr-3"></span>
            Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My mission is to leverage my skills and creativity to deliver innovative coding solutions that exceed client expectations and contribute positively to the digital
            landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
          </p>
        </div>

        {/* Resume Download Section */}
        <div className="mt-8">
          <ResumeDownload />
        </div>
      </div>
    </div>
  )
}

export default About