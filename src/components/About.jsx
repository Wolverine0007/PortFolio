import React from 'react'
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";




function About() {
  return (
    <div name="About"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 ">
      <div> <h1 className="text-3xl font-bold mb-5">About</h1> 
       <p>Hello, I'm Sanket Banate, a competative programmer and passionate Web developer with a keen eye for
         MERN Stack. With a background in IT, I strive to create impactful 
         and visually stunning Software solutions  that leave a lasting impression.
         </p> <br/>

<div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 ">
 <div className="space-y-2">
    <h1 className="font-bold text-orange-600">Availabel On</h1> <br/>
    <ul className="flex space-x-5">
    <li> <a href="https://www.codechef.com/users/wolverine0007" target="_blank">
    <SiCodechef  className="text-2xl cursor-pointer"/>
    </a>
    </li>  
     
     <li> <a href="https://codeforces.com/profile/wolverine_coder" target="_blank">
    <SiCodeforces className="text-2xl cursor-pointer" />
    </a>
    </li>  
   
   <li> <a href="https://leetcode.com/u/sanket206/" target="_blank">
   <SiLeetcode  className="text-2xl cursor-pointer" />
    </a>
    </li>  
     
    

    <li><a href="https://github.com/Wolverine0007" target="_blank">
    <FaGithub className="text-2xl cursor-pointer" />
    </a>
    </li>  
    </ul>

 </div>
 </div>









         <br/>

         <h1 className="text-green-600 font-semibold text-xl">Education and Training
         </h1><br/>
         <span>Education:
         
         B.tech in Computer Engineering 
          
         </span>
         <br/>
         <br/>
         <span className="space-y-4">
           Certifications.
          <br/>
          <div className="flex space-x-8 ">
          <div className="text-blue-800">
          <a  href="https://drive.google.com/file/d/1szCMdGmGsvxML7JlOSWokV70JYhs4y55/view?usp=drive_link" target="_blank"> Python For Data Science</a>
          </div>

          <div className="text-blue-800">
          <a  href="https://drive.google.com/file/d/1PwFh7UsM1DlE7BdaI-wmAb1YEDyIvACe/view?usp=drive_link "target="_blank">JavaScript</a>
          </div>
          
          <div className="text-blue-800">
          <a  href="https://drive.google.com/file/d/1ovD6mEcaDA4ROGcKcQU_dzUshSYXMe0Z/view?usp=sharing"target="_blank">Introduction to Cybersecurity</a>
          </div>

          <div className="text-blue-800">
          <a  href="https://drive.google.com/file/d/1_iRvWSr3GzpK3rRcXyOT4oVpM08H9UIf/view?usp=sharing"target="_blank">Data Science</a>
          </div>
          
          </div>
         </span>

         <br/>
         <br/>
         <h1 className="text-green-600 font-semibold text-xl">Skills & Expertise
         </h1><br/>
         <span>
          <p>Proficient in: Java, C++, Python, HTML, CSS</p><br/>
           <p>Experienced with: Tableau, database management systems, and web development tools</p><br/>
           <p>Strong grasp of: Data analysis, algorithm design, and web design principles</p><br/>
            <p>Excellent problem-solving skills: Adept at tackling complex challenges in programming and data visualization</p><br/>
            <p>Effective communicator and collaborator: Skilled in teamwork and delivering clear, impactful solutions.</p>
            
         </span>

         <br/>
         <br/>
         <h1 className="text-green-600 font-semibold text-xl">Professional Experiance
         </h1>
         <span>
          No any professional experiance
            
         </span>
          
         <br/>
         {/*<br/>*/}
         {/*<h1 className="text-green-600 font-semibold text-xl">Achivements & Award
         </h1>
         <span>[Award/Recognition], [Organization/Institution], [Year] [Achievement], [Organization/Platform], [Year]
         </span>
          */}
         <br/>
         <br/>
         <h1 className="text-green-600 font-semibold text-xl">Mission
         </h1>
         <p>My mission is to leverage my skills and creativity to deliver innovative coding solutions that exceed client expectations and contribute positively to the digita
         landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
         </p>
         
         
         </div>
        </div>
  )
}

export default About