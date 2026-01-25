import React from 'react'
import pic from "../../public/sanket.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-0 space-y-6 order-2 md:order-1">
            <div className="space-y-4">
              <span className="text-xl text-blue-600 font-medium">Welcome to My Portfolio</span>
              <div className="flex space-x-2 text-2xl md:text-4xl">
                <h1 className="text-gray-800">Hello, I'm a</h1>
                <ReactTyped
                  className="text-orange-600 font-bold"
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
            </div>

<p className="text-lg text-gray-700 leading-relaxed">
  I am a C++ programmer and web developer with a strong interest in cloud technologies.
  I enjoy building modern web applications, deploying them on AWS, and applying competitive
  programming concepts to write efficient and optimized solutions.
</p>



            <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-start">
              <div className="space-y-4">
                <h2 className="font-bold text-gray-800 text-lg">Available On</h2>
                <div className="flex space-x-6">
                  <a href="https://www.facebook.com/sanket.banate.1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                    <FaFacebook className="text-3xl cursor-pointer text-blue-600 hover:text-blue-700" />
                  </a>
                  <a href="https://www.linkedin.com/in/sanket-banate-60809b296/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                    <FaLinkedin className="text-3xl cursor-pointer text-blue-600 hover:text-blue-700" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCi3B-dDOuwOBP8PK_ORnbmA" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                    <FaYoutube className="text-3xl cursor-pointer text-red-600 hover:text-red-700" />
                  </a>
                  <a href="https://www.instagram.com/sanket_banate/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                    <FaInstagramSquare className="text-3xl cursor-pointer text-pink-600 hover:text-pink-700" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-gray-800 text-lg">Currently Working On</h2>
                <div className="flex space-x-6">
                  <SiMongodb className="text-3xl md:text-4xl hover:scale-110 duration-200 text-green-600" />
                  <SiExpress className="text-3xl md:text-4xl hover:scale-110 duration-200 text-gray-600" />
                  <FaReact className="text-3xl md:text-4xl hover:scale-110 duration-200 text-blue-500" />
                  <FaNodeJs className="text-3xl md:text-4xl hover:scale-110 duration-200 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-12 md:mt-0 mt-8 order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20"></div>
              <img
                src={pic}
                className="relative rounded-full md:w-[450px] md:h-[450px] w-[300px] h-[300px] object-cover shadow-2xl border-4 border-white"
                alt="Sanket Banate"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200" />
    </>
  )
}

export default Home